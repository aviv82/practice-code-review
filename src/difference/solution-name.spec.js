// eslint-disable-next-line folders/match-regex
import {
  difference1,
  difference2,
  difference3,
  difference4,
  difference5,
} from './alina/sandbox.js';

for (const solution of [
  difference1,
  difference2,
  difference3,
  difference4,
  difference5,
]) {
  describe('test difference of two arrays and without duplication', () => {
    describe('default parameters', () => {
      it('argument values is empty', () => {
        const array = [];
        const actual = solution(array);
        expect(actual).toEqual([]);
      });
      it('both argument are empty', () => {
        const actual = solution();
        expect(actual).toEqual([]);
      });
    });

    describe('standard test', () => {
      it('number array', () => {
        const array = [1, 2, 3];
        const values = [1, 2];
        const actual = solution(array, values);
        expect(actual).toEqual([3]);
      });
      it('string array', () => {
        const array = ['a', 'b', 'b', 'null'];
        const values = ['a'];
        const actual = solution(array, values);
        expect(actual).toEqual(['b', 'null']);
      });
      it('mix array', () => {
        const array = [1, 1, 'a', null, undefined, NaN];
        const values = [2];
        const actual = solution(array, values);
        expect(actual).toEqual([1, 'a', null, undefined, NaN]);
      });
    });
  });
}
