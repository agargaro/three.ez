import { Object3D } from "three";

/** @internal */
export function query(target: Object3D, query: string): Object3D {
  // const blocks = parse(query);
  return undefined;
}

/** @internal */
export function queryAll(target: Object3D, query: string): Object3D[] {
  const result: Object3D[] = [];
  test(target, parse(query), result);
  return result;
}

function test(target: Object3D, blocks: QueryBlock[], result: Object3D[]): void {
  const newBlocks = [];
  let added = false;

  for (let i = 0; i < blocks.length; i++) {
    let block = blocks[i];

    if (checkType(target, block.type) && checkTags(target, block.tags) && checkAttributes(target, block.attributes)) {
      if (!block.next) {
        if (!added) {
          result.push(target);
          added = true;
        }
        newBlocks.push(block.prev);
      } else {
        newBlocks.push(block.next)
      }

    } else {

      // OPT
      if (block !== block.prev) {
        block = block.prev;

        if (checkType(target, block.type) && checkTags(target, block.tags) && checkAttributes(target, block.attributes)) {
          newBlocks.push(block.next)
        } else {
          newBlocks.push(block)
        }
      } else {
        newBlocks.push(block)
      }
    }
  }

  const children = target.children;
  for (let i = 0; i < children.length; i++) {
    test(children[i], newBlocks, result)
  }
}

function checkType(target: Object3D, type: string): boolean {
  return !type || target.type === type;
}

function checkTags(target: Object3D, tags: string[]): boolean {
  return true;
}

function checkAttributes(target: Object3D, attributes: Attribute[]): boolean {
  for (let j = 0; j < attributes.length; j++) {
    const attr = attributes[j];
    if (target[attr.key] != attr.value) return false; // fix not consider 0
  }
  return true;
}

//#region Query Parsing

interface Attribute {
  key: string;
  value: string;
}

interface QueryBlock {
  tags: string[];
  attributes: Attribute[];
  type?: string;
  recursive?: boolean;
  prev?: QueryBlock;
  next?: QueryBlock;
}

interface NewBlockData {
  char: string;
  end?: number;
}

function parse(query: string): QueryBlock[] {
  const blocks: QueryBlock[] = [];
  let currentBlock: QueryBlock = { attributes: [], tags: [] };
  let end = 0, i = 0;

  blocks.push(currentBlock);
  currentBlock.prev = currentBlock;
  query = query.trim();

  while ((i = end) < query.length) {
    let char = query[i];

    const result = checkBlock(query, i);
    if (result) {

      if (result.char === ',') {
        blocks.push(currentBlock = { attributes: [], tags: [] });
        currentBlock.prev = currentBlock;
      } else {
        const newBlock: QueryBlock = { attributes: [], tags: [], recursive: result.char === ' ' };
        currentBlock.next = newBlock;
        newBlock.prev = getPrev(newBlock, currentBlock);
        currentBlock = newBlock;
      }

      i = result.end;
      char = query[i];
    }

    end = getNextIndex(query, i + 1);

    if (char === '.') addTag(query, i, end, currentBlock);
    else if (char === '[') addAttribute(query, i, end, currentBlock);
    else addType(query, i, end, currentBlock);
  }

  return blocks;
}

function checkBlock(query: string, index: number): NewBlockData {
  let ret: NewBlockData;

  for (; index < query.length; index++) {
    const char = query[index];
    if (char !== ' ' && char !== '>' && char !== ',') break;
    if (!ret) {
      ret = { char };
    } else if (char !== ' ') {
      ret.char = char;
    }
  }

  if (ret) ret.end = index;
  return ret;
}

function getPrev(newBlock: QueryBlock, oldBlock: QueryBlock): QueryBlock {
  if (newBlock.recursive) return newBlock;
  while (oldBlock !== oldBlock.prev) {
    oldBlock = oldBlock.prev;
  }
  return oldBlock;
}

function getNextIndex(query: string, index: number): number {
  for (; index < query.length; index++) {
    const char = query[index];
    if (char === '.' || char === ' ' || char === '>' || char === '[' || char === ',') break;
  }
  return index;
}

function addTag(query: string, start: number, end: number, block: QueryBlock): void {
  block.tags.push(query.substring(start + 1, end));
}

function addType(query: string, start: number, end: number, block: QueryBlock): void {
  block.type = query.substring(start, end);
}

function addAttribute(query: string, start: number, end: number, block: QueryBlock): void {
  const sub = query.substring(start + 1, end - 1);
  const split = sub.split("=");
  block.attributes.push({ key: split[0], value: split[1] });
}

//#endregion

// SUPPORTED:
// .tag
// .tag.tag2
// .tag .tag2
// Mesh
// .tag , .tag2
// .tag > .tag2
// [attribute=value]
