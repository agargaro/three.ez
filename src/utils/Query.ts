import { Object3D } from "three";

interface Attribute {
  key: string;
  value: string;
  operator?: string;
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

/** @internal */
export function querySelector(target: Object3D, query: string): Object3D {
  const queryBlocks = parse(query);
  const blocks: QueryBlock[][] = [];

  for (let i = 0; i < queryBlocks.length; i++) {
    blocks[i] = [queryBlocks[i]];
  }

  return search(target, blocks);
}

/** @internal */
export function querySelectorAll(target: Object3D, query: string): Object3D[] {
  const result: Object3D[] = [];
  const queryBlocks = parse(query);
  const blocks: QueryBlock[][] = [];

  for (let i = 0; i < queryBlocks.length; i++) {
    blocks[i] = [queryBlocks[i]];
  }

  searchAll(target, blocks, result);
  return result;
}

function search(target: Object3D, blocks: QueryBlock[][]): Object3D {
  const newBlocks: QueryBlock[][] = [];

  for (const blockList of blocks) {
    const newBlock: QueryBlock[] = [];
    newBlocks.push(newBlock);

    for (const block of blockList) {
      if (validateBlock(target, block, newBlock)) return target;
    }

    const lastBlock = blockList[blockList.length - 1];
    if (newBlock[newBlock.length - 1] !== lastBlock.prev) newBlock.push(lastBlock.prev);
  }

  for (const child of target.children) {
    const obj = search(child, newBlocks);
    if (obj) return obj;
  }
}

function searchAll(target: Object3D, blocks: QueryBlock[][], result: Object3D[]): void {
  const newBlocks: QueryBlock[][] = [];
  let added = false;

  for (const blockList of blocks) {
    const newBlock: QueryBlock[] = [];
    newBlocks.push(newBlock);

    for (const block of blockList) {
      if (validateBlock(target, block, newBlock) && !added) {
        result.push(target);
        if (target.children.length === 0) return;
        added = true;
      }
    }

    const lastBlock = blockList[blockList.length - 1];
    if (newBlock[newBlock.length - 1] !== lastBlock.prev) newBlock.push(lastBlock.prev);
  }

  for (const child of target.children) {
    searchAll(child, newBlocks, result)
  }
}

function validateBlock(target: Object3D, block: QueryBlock, newBlock: QueryBlock[]): boolean {
  if (areValidConditions(target, block)) {
    if (block.next) {
      newBlock.push(block.next);
    } else {
      return true;
    }
  }
  return false;
}

function areValidConditions(target: Object3D, block: QueryBlock): boolean {
  return checkType(target, block.type) && checkTags(target, block.tags) && checkAttributes(target, block.attributes);
}

function checkType(target: Object3D, type: string): boolean {
  return !type || target.type === type;
}

function checkTags(target: Object3D, tags: string[]): boolean {
  for (const tag of tags) {
    if (!target.tags.has(tag)) return false;
  }
  return true;
}

function checkAttributes(target: Object3D, attributes: Attribute[]): boolean {
  for (const attribute of attributes) {
    const value = typeof target[attribute.key] === 'string' ? target[attribute.key] : target[attribute.key].toString();

    switch (attribute.operator) {
      case undefined:
        if (value !== attribute.value) return false;
        break;
      case '*':
        if (!value.includes(attribute.value)) return false;
        break;
      case '$':
        if (!value.endsWith(attribute.value)) return false;
        break;
      case '^':
        if (!value.startsWith(attribute.value)) return false;
        break;
    }
  }

  return true;
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

    const result = getBlock(query, i);
    if (result) {

      if (result.char === ',') {
        currentBlock = { attributes: [], tags: [] };
        blocks.push(currentBlock);
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

function getBlock(query: string, index: number): NewBlockData {
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
  const lastChar = split[0][split[0].length - 1];
  if (lastChar === '*' || lastChar === '$' || lastChar === '^') {
    block.attributes.push({ key: split[0].slice(0, -1), value: split[1], operator: lastChar });
  } else {
    block.attributes.push({ key: split[0], value: split[1] });
  }
}

// SUPPORTED:
// .tag
// .tag.tag2
// .tag .tag2
// Mesh
// .tag, .tag2
// .tag > .tag2
// [attribute=value]
