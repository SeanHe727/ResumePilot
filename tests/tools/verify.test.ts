import { describe, expect, it } from 'vitest';

import { checkNoFabricatedNumbers, readJson } from '../../src/tools/verify.js';

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

describe('checkNoFabricatedNumbers', () => {
  it('rejects a figure the original never stated', () => {
    // The guard the rewrite tool exists for: a model completing the XYZ
    // pattern produces "reduced latency by 40%" for a bullet that measured
    // nothing, and the candidate cannot defend it in an interview.
    const check = checkNoFabricatedNumbers(
      'Responsible for the order query service',
      'Cut order-query latency 40% by adding a second-level cache',
    );

    expect(check.ok).toBe(false);
    expect(check.figures).toContain('40');
  });

  it('allows a placeholder, which states nothing', () => {
    expect(
      checkNoFabricatedNumbers(
        'Responsible for the order query service',
        'Cut order-query latency by [% faster than before] by adding a cache',
      ).ok,
    ).toBe(true);
  });

  it('lets the rewrite name a technology whose name contains a digit', () => {
    // `FP16` is the baseline the rewrite was asked to name, not a figure the
    // candidate has to defend — and rejecting it throws away the whole rewrite
    // over one word. The same goes for INT8, p99, HTTP/2 and S3.
    for (const after of [
      'Cut model size vs. the FP16 baseline by [% smaller]',
      'Cut p99 latency by [% faster] with an INT8 TensorRT engine',
      'Served the payload over HTTP/2 from S3, cutting time-to-first-byte [by how much]',
    ]) {
      expect(checkNoFabricatedNumbers('Optimised the model', after).ok, after).toBe(true);
    }
  });

  it('still catches a figure hiding next to an identifier', () => {
    const check = checkNoFabricatedNumbers(
      'Optimised the model',
      'Cut FP16 model size 46% and latency 75%',
    );

    expect(check.ok).toBe(false);
    expect(check.figures).toEqual(['46', '75']);
  });

  it('keeps the figures the original already stated', () => {
    expect(
      checkNoFabricatedNumbers(
        'Reduced P99 latency from 800ms to 90ms',
        'Cut p99 latency from 800ms to 90ms by adding a second-level cache',
      ).ok,
    ).toBe(true);
  });
});
