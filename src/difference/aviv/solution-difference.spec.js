/* eslint-disable */

import { solutionName } from './solution-name.js';

describe('removes duplicate values from array', () => {
  it('should contain no duplicates', () => {
    expect([11, 22, 3, 4], [11, 22, 4]).toEqual([3]);
  });
});
