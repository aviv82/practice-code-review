import { firstTry } from './aviv/sandbox.js';

for (const solution of [firstTry]) {
  describe('returns new array of intersecting values', () => {
    describe('default parameters', () => {
      it('default parameters - should return an empty array', () => {
        expect(solution()).toEqual([]);
      });
    });
    describe('argument is empty array', () => {
      it('first argument is empty array - should return empty array', () => {
        expect(solution([], ['ew', 'gross'])).toEqual([]);
      });
      it('second argument is empty array - should return empty array', () => {
        expect(solution(['mama', 'mia'], [])).toEqual([]);
      });
      it('both arguments are empty arrays - should return empty array', () => {
        expect(solution([], [])).toEqual([]);
      });
    });
    describe('arguments are both arrays', () => {
      describe('arguments have no overlapping values', () => {
        it('string arguments have no intersecting values - should return an empty array', () => {
          expect(solution(['call', 'me'], ['maybe', '!'])).toEqual([]);
        });
        it('number arguments have no intersecting values - should return an empty array', () => {
          expect(solution([-8, 9], [665, 34])).toEqual([]);
        });
        it('other data types arguments have no intersecting values - should return an empty array', () => {
          expect(solution([false, undefined], [null, NaN])).toEqual([]);
        });
        it('mixed data types arguments have no intersecting values - should return an empty array', () => {
          expect(
            solution([false, 'how', '5', 72, undefined], ['j', 57, null, NaN]),
          ).toEqual([]);
        });
      });
      describe('arguments have overlapping values', () => {
        it('string arguments have intersecting values - should return intersecting values in new array', () => {
          expect(solution(['tap', 'is'], ['tap', '!'])).toEqual(['tap']);
        });
        it('number arguments have intersecting values - should return intersecting values in new array', () => {
          expect(solution([-8, 0.8, 9, 33], [665, 33, 34, 0.8])).toEqual([
            0.8,
            33,
          ]);
        });
        it('other data types arguments have intersecting values - should return intersecting values in new array', () => {
          expect(
            solution([false, undefined, true], [true, null, false, NaN]),
          ).toEqual([false, true]);
        });
        it('mixed data types arguments have intersecting values - should return intersecting values in new array', () => {
          expect(
            solution(
              [false, 'how', '5', 72, undefined, '91'],
              ['j', 57, '91', null, NaN],
            ),
          ).toEqual(['91']);
        });
      });
    });
  });
}
