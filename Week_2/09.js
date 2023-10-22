//1. n이하의 짝수를 구하기
//2. 그 짝수들을 구하기
//3. 구한 값들 모두 더하기

function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; ++i) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}

console.log(solution(10));
