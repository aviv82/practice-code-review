/* eslint-disable */

import { firstTry } from './aviv/sandbox.js';

describe('removes duplicate values from array', () => {
  describe('array is an array of numbers', () => {
    it('should contain no duplicates', () => {
      const array = [11, 22, 3, 4];
      const values = [11, 22, 4];
      expect(firstTry(array, values)).toEqual([3]);
    });
  });
  describe('array is an array of strings', () => {
    it('should contain no duplicates', () => {
      expect(firstTry(['4', 'bob', 'false', 'null'], ['4', 'null'])).toEqual([
        'bob,',
        'false',
      ]);
    });
  });
  describe('array is an array of mixed data types', () => {
    it('should contain no duplicates', () => {
      expect(firstTry([4, 'bob', false, null], ['4', null])).toEqual([
        4,
        'bob',
        false,
      ]);
    });
  });
  describe('one of arrays is an empty array', () => {
    it('should return an empty array', () => {
      expect(firstTry([], ['4', null])).toEqual([]);
    });
    it('should contain no duplicates', () => {
      expect(firstTry(['billy', 78, undefined], [])).toEqual([
        'billy',
        78,
        undefined,
      ]);
    });
  });
});
