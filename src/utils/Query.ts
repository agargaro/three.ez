import { Mesh, Object3D } from "three";

interface QueryBlock {
  tags: string[];
  attributes: { [x: string]: string };
  type?: string;
  recursive?: boolean;
  child?: QueryBlock;
}

interface NewBlockData {
  char: string;
  end?: number;
}

/** @internal */
export function query(target: Object3D, query: string): Object3D {
  return undefined;
}

/** @internal */
export function queryAll(target: Object3D, query: string): Object3D[] {
  return undefined;
}

function parse(query: string): QueryBlock[] {
  const blocks: QueryBlock[] = [];
  let currentBlock: QueryBlock = { attributes: {}, tags: [] };
  let end = 0, i = 0;
  
  blocks.push(currentBlock);
  query = query.trim();

  while ((i = end) < query.length) {
    let char = query[i];

    const result = checkBlock(query, i);
    if (result) {

      if (result.char === ',') {
        blocks.push(currentBlock = { attributes: {}, tags: [] });
      } else {
        currentBlock.child = { attributes: {}, tags: [], recursive: result.char === ' ' };
        currentBlock = currentBlock.child;
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
  block.attributes[split[0]] = split[1];
}

// SUPPORTED: 
// .tag
// .tag.tag2
// .tag .tag2
// Mesh
// .tag , .tag2
// .tag > .tag2
// [attribute=value]
