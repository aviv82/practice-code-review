import {
  splitObject1,
  splitObject2,
  splitObject3,
  splitObject4,
} from './alina/sandbox.js';

for (const solution of [
  splitObject1,
  splitObject2,
  splitObject3,
  splitObject4,
]) {
  describe('Splits an object into multiple objects with one key/value pair each.', () => {
    describe('Test default parameter.', () => {
      it('not input argument, should return [].', () => {
        const expected = [];
        const actual = solution();
        expect(actual).toEqual(expected);
      });
      it('input an empty object, should return [].', () => {
        const toSeparate = {};
        const expected = [];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
    });
    describe('object values are number.', () => {
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { a: 1, b: 2, c: 3 };
        const expected = [{ a: 1 }, { b: 2 }, { c: 3 }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { a: 2, b: 2, c: 3 };
        const expected = [{ a: 2 }, { b: 2 }, { c: 3 }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { a: 2, b: 3, c: 3 };
        const expected = [{ a: 2 }, { b: 3 }, { c: 3 }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { a: 2, b: 2, c: 5 };
        const expected = [{ a: 2 }, { b: 2 }, { c: 5 }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { a: 2, b: 2, c: 6 };
        const expected = [{ a: 2 }, { b: 2 }, { c: 6 }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
    });
    describe('object values are string.', () => {
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'Joe', age: 20, weight: '50kg' };
        const expected = [{ name: 'Joe' }, { age: 20 }, { weight: '50kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'J', age: 20, weight: '50kg' };
        const expected = [{ name: 'J' }, { age: 20 }, { weight: '50kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'Joe', age: 2, weight: '50kg' };
        const expected = [{ name: 'Joe' }, { age: 2 }, { weight: '50kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'Joe', age: 20, weight: '5kg' };
        const expected = [{ name: 'Joe' }, { age: 20 }, { weight: '5kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'Joe', age: 20, weight: '60kg' };
        const expected = [{ name: 'Joe' }, { age: 20 }, { weight: '60kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'Joe', age: 20, weight: '51kg' };
        const expected = [{ name: 'Joe' }, { age: 20 }, { weight: '51kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'Joe', age: 20, weight: '52kg' };
        const expected = [{ name: 'Joe' }, { age: 20 }, { weight: '52kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'Joe', age: 20, weight: '53kg' };
        const expected = [{ name: 'Joe' }, { age: 20 }, { weight: '53kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
    });
    describe('object values are special values.', () => {
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'null', age: 0.2, weight: undefined };
        const expected = [
          { name: 'null' },
          { age: 0.2 },
          { weight: undefined },
        ];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: null, age: 0.2, weight: undefined };
        const expected = [{ name: null }, { age: 0.2 }, { weight: undefined }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'null', age: 0.2, weight: 'undefined' };
        const expected = [
          { name: 'null' },
          { age: 0.2 },
          { weight: 'undefined' },
        ];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'null', age: Infinity, weight: undefined };
        const expected = [
          { name: 'null' },
          { age: Infinity },
          { weight: undefined },
        ];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'null', age: -Infinity, weight: undefined };
        const expected = [
          { name: 'null' },
          { age: -Infinity },
          { weight: undefined },
        ];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
    });
    describe('no Side-effect', () => {
      it('the argument object shoud not modified.', () => {
        const toSeparate = { a: 2, b: 2, c: 6 };
        const expected = { a: 2, b: 2, c: 6 };
        solution(toSeparate);
        expect(toSeparate).toEqual(expected);
      });
      it('the argument object shoud not modified.', () => {
        const toSeparate = { a: 1, b: 2, c: 6 };
        const expected = { a: 1, b: 2, c: 6 };
        solution(toSeparate);
        expect(toSeparate).toEqual(expected);
      });
      it('the argument object shoud not modified.', () => {
        const toSeparate = { a: 2, b: 2, c: 10 };
        const expected = { a: 2, b: 2, c: 10 };
        solution(toSeparate);
        expect(toSeparate).toEqual(expected);
      });
    });
  });
}
