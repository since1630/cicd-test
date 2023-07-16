function sum(a, b) {
  if (a < 0 || b < 0) throw new Error('음수는 안된다');
  return a + b;
}
console.log('여긴 테스트 브랜치');

module.exports = sum;
