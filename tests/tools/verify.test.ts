import { describe, expect, it } from 'vitest';

import { readJson } from '../../src/tools/verify.js';

describe('readJson', () => {
  it('rescues an object whose long field ran onto a second line', () => {
    // What a model writes when a `detail` runs long. `JSON.parse` rejects the
    // raw newline outright, and four thousand characters of correct diagnosis
    // are lost over one character.
    const { value, error } = readJson('{"detail":"first line\nsecond line","score":40}');

    expect(error).toBeUndefined();
    expect(value).toEqual({ detail: 'first line\nsecond line', score: 40 });
  });

  it('drops a comma before a closing brace', () => {
    expect(readJson('{"a":1,"b":[1,2,],}').value).toEqual({ a: 1, b: [1, 2] });
  });

  it('finds the object inside a reply that wraps it in prose', () => {
    // Greedy matching would run to the brace in the closing sentence.
    const { value } = readJson('Here you go:\n{"score":40}\nTell me if you want {more}.');

    expect(value).toEqual({ score: 40 });
  });

  it('says what was wrong with an object that was nearly right', () => {
    const { value, error } = readJson('{"a": undefined}');

    expect(value).toBeNull();
    expect(error).toMatch(/JSON/);
  });

  it('reports no error for a reply that was never JSON', () => {
    // A model that ignored the schema and a model that produced one bad
    // character are different faults, and blaming the second for the first
    // sends you to the wrong place.
    const { value, error } = readJson('The bullet reads fine to me.');

    expect(value).toBeNull();
    expect(error).toBeUndefined();
  });

  it('refuses to close an object that was cut off', () => {
    // A truncated answer is missing findings. Inventing the closing brace
    // would present a partial diagnosis as a complete one.
    const { value } = readJson('{"bullets":[{"bulletId":"x","overallScore":40');

    expect(value).toBeNull();
  });

  it('leaves an escaped newline alone', () => {
    expect(readJson('{"a":"one\\ntwo"}').value).toEqual({ a: 'one\ntwo' });
  });
});
