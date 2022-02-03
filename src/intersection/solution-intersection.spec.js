import { firstTry } from './aviv/sandbox.js';

for (const solution of [firstTry]) {
  describe('returns new array of intersecting values', () => {
    describe('default parameters', () => {
      it('default parameters return an empty array', () => {
        expect(solution).toEqual([]);
      });
    });
  });
}
