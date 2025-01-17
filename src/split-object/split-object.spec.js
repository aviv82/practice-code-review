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
      it('does return a array with one key/value pair.', () => {
        const toSeparate = { a: 1, b: 2, c: 3 };
        const expected = [{ a: 1 }, { b: 2 }, { c: 3 }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('does returns a array with one key/value pair.', () => {
        const toSeparate = { a: 2, b: 2, c: 3 };
        const expected = [{ a: 2 }, { b: 2 }, { c: 3 }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('return an array with one key/value pair.', () => {
        const toSeparate = { a: 2, b: 3, c: 3 };
        const expected = [{ a: 2 }, { b: 3 }, { c: 3 }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('output a array with one key/value pair.', () => {
        const toSeparate = { a: 2, b: 2, c: 5 };
        const expected = [{ a: 2 }, { b: 2 }, { c: 5 }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('hope to return a array with one key/value pair.', () => {
        const toSeparate = { a: 2, b: 2, c: 6 };
        const expected = [{ a: 2 }, { b: 2 }, { c: 6 }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
    });
    describe('object values are string.', () => {
      it('array with one key/value pair.', () => {
        const toSeparate = { name: 'Joe', age: 20, weight: '50kg' };
        const expected = [{ name: 'Joe' }, { age: 20 }, { weight: '50kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('Should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'J', age: 20, weight: '50kg' };
        const expected = [{ name: 'J' }, { age: 20 }, { weight: '50kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('output an array with one key/value pair.', () => {
        const toSeparate = { name: 'Joe', age: 2, weight: '50kg' };
        const expected = [{ name: 'Joe' }, { age: 2 }, { weight: '50kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('Should return a array with one key/value pair.', () => {
        const toSeparate = { name: 'Joe', age: 20, weight: '5kg' };
        const expected = [{ name: 'Joe' }, { age: 20 }, { weight: '5kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('will return an array with one key/value pair.', () => {
        const toSeparate = { name: 'Joe', age: 20, weight: '60kg' };
        const expected = [{ name: 'Joe' }, { age: 20 }, { weight: '60kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('one key/value pairs in an array.', () => {
        const toSeparate = { name: 'Joe', age: 20, weight: '51kg' };
        const expected = [{ name: 'Joe' }, { age: 20 }, { weight: '51kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('unique key/value pair in an array.', () => {
        const toSeparate = { name: 'Joe', age: 20, weight: '52kg' };
        const expected = [{ name: 'Joe' }, { age: 20 }, { weight: '52kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('array with one key/value pair.', () => {
        const toSeparate = { name: 'Joe', age: 20, weight: '53kg' };
        const expected = [{ name: 'Joe' }, { age: 20 }, { weight: '53kg' }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
    });
    describe('object values are special values.', () => {
      it('an array with one key/value pair.', () => {
        const toSeparate = { name: 'null', age: 0.2, weight: undefined };
        const expected = [
          { name: 'null' },
          { age: 0.2 },
          { weight: undefined },
        ];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('return an array with one key/value pair.', () => {
        const toSeparate = { name: null, age: 0.2, weight: undefined };
        const expected = [{ name: null }, { age: 0.2 }, { weight: undefined }];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('returns an array with one key/value pair.', () => {
        const toSeparate = { name: 'null', age: 0.2, weight: 'undefined' };
        const expected = [
          { name: 'null' },
          { age: 0.2 },
          { weight: 'undefined' },
        ];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('return a array with one key/value pair.', () => {
        const toSeparate = { name: 'null', age: Infinity, weight: undefined };
        const expected = [
          { name: 'null' },
          { age: Infinity },
          { weight: undefined },
        ];
        const actual = solution(toSeparate);
        expect(actual).toEqual(expected);
      });
      it('return a array with one key/value pair.', () => {
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
    describe('has no side-effects', () => {
      it('does not modify the origin object.', () => {
        const toSeparate = { a: 2, b: 2, c: 6 };
        const expected = { a: 2, b: 2, c: 6 };
        solution(toSeparate);
        expect(toSeparate).toEqual(expected);
      });
      it('the argument object does not modified.', () => {
        const toSeparate = { a: 1, b: 2, c: 6 };
        const expected = { a: 1, b: 2, c: 6 };
        solution(toSeparate);
        expect(toSeparate).toEqual(expected);
      });
      it('the argument object does not modified.', () => {
        const toSeparate = { a: 2, b: 2, c: 10 };
        const expected = { a: 2, b: 2, c: 10 };
        solution(toSeparate);
        expect(toSeparate).toEqual(expected);
      });
    });
  });
}
