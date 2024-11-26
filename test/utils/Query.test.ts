import { Group, Mesh, Scene } from 'three';
import { beforeAll, describe, expect, it } from 'vitest';
import { setup } from '../../src';

setup();

describe('Query standard cases', () => {
  let scene: Scene;

  beforeAll(() => {
    scene = new Scene();
    for (let i = 0; i < 4; i++) {
      const group = new Group();
      group.name = `group_${i}`;
      scene.add(group);

      if (i === 0) group.tags.add('first');
      if (i === 3) group.tags.add('last');

      for (let j = 0; j < 4; j++) {
        const mesh = new Mesh();
        mesh.name = `mesh_${i}_${j}`;
        group.add(mesh);
        mesh.tags.add(j % 2 === 0 ? 'even' : 'odd');
      }
      group.children[0].tags.add('first');
      group.children[3].tags.add('last');
    }
  });

  it('querySelector: no matching name', () => {
    const result = scene.querySelector('[name=group_10]');
    expect(result).toBeUndefined();
  });

  it('querySelector: matching name', () => {
    const result = scene.querySelector('[name=group_3]');
    expect(result).toEqual(scene.children[3]);
  });

  it('querySelector: matching contains name', () => {
    const result = scene.querySelector('[name*=_2]');
    expect(result).toEqual(scene.children[0].children[2]);
  });

  it('querySelector: matching ends with name', () => {
    const result = scene.querySelector('[name$=_3]');
    expect(result).toEqual(scene.children[0].children[3]);
  });

  it('querySelector: matching start with name', () => {
    const result = scene.querySelector('[name^=group]');
    expect(result).toEqual(scene.children[0]);
  });

  it('querySelector: matching type', () => {
    const result = scene.querySelector('Mesh');
    expect(result).toEqual(scene.children[0].children[0]);
  });

  it('querySelector: matching tags', () => {
    const result = scene.querySelector('.first');
    expect(result).toEqual(scene.children[0]);
  });

  it('querySelector: matching multiple tags', () => {
    const result = scene.querySelector('.last.odd');
    expect(result).toEqual(scene.children[0].children[3]);
  });

  it('querySelector: matching type and tags', () => {
    const result = scene.querySelector('Mesh.first');
    expect(result).toEqual(scene.children[0].children[0]);
  });

  it('querySelector: matching type, name and tags', () => {
    const result = scene.querySelector('Mesh.even[name*=_2]');
    expect(result).toEqual(scene.children[0].children[2]);
  });

  it('querySelector: matching type parent and recursive type children', () => {
    const result = scene.querySelector('Scene Mesh.odd');
    expect(result).toEqual(scene.children[0].children[1]);
  });

  it('querySelector: no matching type parent and type children', () => {
    const result = scene.querySelector('Scene > Mesh');
    expect(result).toBeUndefined();
  });

  it('querySelector: matching type parent and type children', () => {
    const result = scene.querySelector('Group > Mesh');
    expect(result).toEqual(scene.children[0].children[0]);
  });

  it('querySelector: matching type 1 or type 2', () => {
    const result = scene.querySelector('Mesh, Group');
    expect(result).toEqual(scene.children[0]);
  });

  it('querySelectorAll: no matching name', () => {
    const result = scene.querySelectorAll('[name=group_10]');
    expect(result.length).toEqual(0);
  });

  it('querySelectorAll: matching name', () => {
    const result = scene.querySelectorAll('[name=group_3]');
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(scene.children[3]);
  });

  it('querySelectorAll: matching contains name', () => {
    const result = scene.querySelectorAll('[name*=_2]');
    expect(result.length).toEqual(8);
    expect(result[0]).toEqual(scene.children[0].children[2]);
    expect(result[1]).toEqual(scene.children[1].children[2]);
    expect(result[2]).toEqual(scene.children[2]);
    expect(result[3]).toEqual(scene.children[2].children[0]);
    expect(result[4]).toEqual(scene.children[2].children[1]);
    expect(result[5]).toEqual(scene.children[2].children[2]);
    expect(result[6]).toEqual(scene.children[2].children[3]);
    expect(result[7]).toEqual(scene.children[3].children[2]);
  });

  it('querySelectorAll: matching ends with name', () => {
    const result = scene.querySelectorAll('[name$=_3]');
    expect(result.length).toEqual(5);
    expect(result[0]).toEqual(scene.children[0].children[3]);
    expect(result[1]).toEqual(scene.children[1].children[3]);
    expect(result[2]).toEqual(scene.children[2].children[3]);
    expect(result[3]).toEqual(scene.children[3]);
    expect(result[4]).toEqual(scene.children[3].children[3]);
  });

  it('querySelectorAll: matching start with name', () => {
    const result = scene.querySelectorAll('[name^=group]');
    expect(result.length).toEqual(4);
    expect(result[0]).toEqual(scene.children[0]);
    expect(result[1]).toEqual(scene.children[1]);
    expect(result[2]).toEqual(scene.children[2]);
    expect(result[3]).toEqual(scene.children[3]);
  });

  it('querySelectorAll: matching type', () => {
    const result = scene.querySelectorAll('Mesh');
    expect(result.length).toEqual(16);
    expect(result[0]).toEqual(scene.children[0].children[0]);
    expect(result[1]).toEqual(scene.children[0].children[1]);
    expect(result[2]).toEqual(scene.children[0].children[2]);
    expect(result[3]).toEqual(scene.children[0].children[3]);
    expect(result[4]).toEqual(scene.children[1].children[0]);
    expect(result[5]).toEqual(scene.children[1].children[1]);
    expect(result[6]).toEqual(scene.children[1].children[2]);
    expect(result[7]).toEqual(scene.children[1].children[3]);
    expect(result[8]).toEqual(scene.children[2].children[0]);
    expect(result[9]).toEqual(scene.children[2].children[1]);
    expect(result[10]).toEqual(scene.children[2].children[2]);
    expect(result[11]).toEqual(scene.children[2].children[3]);
    expect(result[12]).toEqual(scene.children[3].children[0]);
    expect(result[13]).toEqual(scene.children[3].children[1]);
    expect(result[14]).toEqual(scene.children[3].children[2]);
    expect(result[15]).toEqual(scene.children[3].children[3]);
  });

  it('querySelectorAll: matching tags', () => {
    const result = scene.querySelectorAll('.first');
    expect(result.length).toEqual(5);
    expect(result[0]).toEqual(scene.children[0]);
    expect(result[1]).toEqual(scene.children[0].children[0]);
    expect(result[2]).toEqual(scene.children[1].children[0]);
    expect(result[3]).toEqual(scene.children[2].children[0]);
    expect(result[4]).toEqual(scene.children[3].children[0]);
  });

  it('querySelectorAll: matching multiple tags', () => {
    const result = scene.querySelectorAll('.last.odd');
    expect(result.length).toEqual(4);
    expect(result[0]).toEqual(scene.children[0].children[3]);
    expect(result[1]).toEqual(scene.children[1].children[3]);
    expect(result[2]).toEqual(scene.children[2].children[3]);
    expect(result[3]).toEqual(scene.children[3].children[3]);
  });

  it('querySelectorAll: matching type and tags', () => {
    const result = scene.querySelectorAll('Mesh.last[name*=_2]');
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(scene.children[2].children[3]);
  });

  it('querySelectorAll: matching type, name and tags', () => {
    const result = scene.querySelectorAll('Mesh.odd[name*=_3]');
    expect(result.length).toEqual(5);
    expect(result[0]).toEqual(scene.children[0].children[3]);
    expect(result[1]).toEqual(scene.children[1].children[3]);
    expect(result[2]).toEqual(scene.children[2].children[3]);
    expect(result[3]).toEqual(scene.children[3].children[1]);
    expect(result[4]).toEqual(scene.children[3].children[3]);
  });

  it('querySelectorAll: matching type parent and recursive type children', () => {
    const result = scene.querySelectorAll('Scene Mesh.even');
    expect(result.length).toEqual(8);
    expect(result[0]).toEqual(scene.children[0].children[0]);
    expect(result[1]).toEqual(scene.children[0].children[2]);
    expect(result[2]).toEqual(scene.children[1].children[0]);
    expect(result[3]).toEqual(scene.children[1].children[2]);
    expect(result[4]).toEqual(scene.children[2].children[0]);
    expect(result[5]).toEqual(scene.children[2].children[2]);
    expect(result[6]).toEqual(scene.children[3].children[0]);
    expect(result[7]).toEqual(scene.children[3].children[2]);
  });

  it('querySelectorAll: no matching type parent and type children', () => {
    const result = scene.querySelectorAll('Scene > Mesh');
    expect(result.length).toBe(0);
  });

  it('querySelectorAll: matching type parent and type children', () => {
    const result = scene.querySelectorAll('Group > Mesh.odd');
    expect(result.length).toEqual(8);
    expect(result[0]).toEqual(scene.children[0].children[1]);
    expect(result[1]).toEqual(scene.children[0].children[3]);
    expect(result[2]).toEqual(scene.children[1].children[1]);
    expect(result[3]).toEqual(scene.children[1].children[3]);
    expect(result[4]).toEqual(scene.children[2].children[1]);
    expect(result[5]).toEqual(scene.children[2].children[3]);
    expect(result[6]).toEqual(scene.children[3].children[1]);
    expect(result[7]).toEqual(scene.children[3].children[3]);
  });

  it('querySelectorAll: matching type 1 or type 2', () => {
    const result = scene.querySelectorAll('Mesh, Group');
    expect(result.length).toEqual(20);
    expect(result[0]).toEqual(scene.children[0]);
    expect(result[1]).toEqual(scene.children[0].children[0]);
    expect(result[2]).toEqual(scene.children[0].children[1]);
    expect(result[3]).toEqual(scene.children[0].children[2]);
    expect(result[4]).toEqual(scene.children[0].children[3]);
    expect(result[5]).toEqual(scene.children[1]);
    expect(result[6]).toEqual(scene.children[1].children[0]);
    expect(result[7]).toEqual(scene.children[1].children[1]);
    expect(result[8]).toEqual(scene.children[1].children[2]);
    expect(result[9]).toEqual(scene.children[1].children[3]);
    expect(result[10]).toEqual(scene.children[2]);
    expect(result[11]).toEqual(scene.children[2].children[0]);
    expect(result[12]).toEqual(scene.children[2].children[1]);
    expect(result[13]).toEqual(scene.children[2].children[2]);
    expect(result[14]).toEqual(scene.children[2].children[3]);
    expect(result[15]).toEqual(scene.children[3]);
    expect(result[16]).toEqual(scene.children[3].children[0]);
    expect(result[17]).toEqual(scene.children[3].children[1]);
    expect(result[18]).toEqual(scene.children[3].children[2]);
    expect(result[19]).toEqual(scene.children[3].children[3]);
  });
});

describe('Query special cases', () => {
  let scene: Scene;
  let group: Group;
  let group2: Group;
  let mesh: Mesh;

  beforeAll(() => {
    scene = new Scene();
    scene.tags.add('x');
    group = new Group();
    group.tags.add('x').add('y');
    group2 = new Group();
    group2.tags.add('y');
    mesh = new Mesh();
    mesh.tags.add('z');

    scene.add(group.add(group2.add(mesh)));
  });

  it('querySelector: special case', () => {
    const result = scene.querySelector('.x > .y > .z');
    expect(result).toEqual(mesh);
  });

  it('querySelectorAll: special case', () => {
    const result = scene.querySelectorAll('.x > .y > .z, Group > Group');
    expect(result.length).toEqual(2);
    expect(result[0]).toEqual(group2);
    expect(result[1]).toEqual(mesh);
  });
});
