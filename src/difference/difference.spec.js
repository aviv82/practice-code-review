import {
  difference1,
  difference2,
  difference3,
  difference4,
} from './alina/sandbox.js';

for (const solution of [difference1, difference2, difference3, difference4]) {
  describe('test difference of two arrays and without duplication and Side-effects', () => {
    describe('default parameters', () => {
      it('argument values is empty:should return []', () => {
        const array = [];
        const actual = solution(array);
        expect(actual).toEqual([]);
      });
      it('both argument are empty: should return []', () => {
        const actual = solution();
        expect(actual).toEqual([]);
      });
    });

    describe('array is array', () => {
      it('should return number array', () => {
        const array = [1, 2, 3];
        const values = [1, 2];
        const actual = solution(array, values);
        expect(actual).toEqual([3]);
      });
      it('should return string array', () => {
        const array = ['a', 'b', 'b', 'null'];
        const values = ['a'];
        const actual = solution(array, values);
        expect(actual).toEqual(['b', 'null']);
      });
      it('should return different data type array', () => {
        const array = [1, 1, 'a', null, undefined];
        const values = [2];
        const actual = solution(array, values);
        expect(actual).toEqual([1, 'a', null, undefined]);
      });
    });
    describe('test Side-effects', () => {
      it('should return number array without Side-effects', () => {
        const array = [1, 2, 3];
        const values = [1, 2];
        const actual = solution(array, values);
        expect(actual).toEqual([3]);
        expect(array).toEqual([1, 2, 3]);
        expect(values).toEqual([1, 2]);
      });
      it('should return string array without Side-effects', () => {
        const array = ['a', 'b', 'b', 'null'];
        const values = ['a'];
        const actual = solution(array, values);
        expect(actual).toEqual(['b', 'null']);
        expect(array).toEqual(['a', 'b', 'b', 'null']);
        expect(values).toEqual(['a']);
      });
      it('should return different data type array without Side-effects', () => {
        const array = [1, 1, 'a', null, undefined];
        const values = [2];
        const actual = solution(array, values);
        expect(actual).toEqual([1, 'a', null, undefined]);
        expect(array).toEqual([1, 1, 'a', null, undefined]);
        expect(values).toEqual([2]);
      });
    });


  });
}
