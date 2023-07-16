const sum = require('../../src/unit.js');

describe('sum test', () => {
  test('sum 성공', () => {
    expect(sum(1, 3)).toEqual(4);
  });

  it('sum 실패', () => {
    expect(() => {
      sum(-1, -1);
    }).toThrow('음수는 안된다');
  });
});
