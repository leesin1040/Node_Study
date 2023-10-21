function solution(numer1, denum1, numer2, denum2) {
  let numer = numer1 * denum2 + numer2 * denum1;
  let denum = denum1 * denum2;
} // 분수 통분 완료

function gcddd(numer, denum) {
  let gcd = 1;
  for (let i = 2; i <= Math.min(numer, denum); i++) {
    if (numer % i === 0 && denum % i === 0) gcd = i;
  }
  let numma = numer / gcd;
  let denuma = denum / gcd;
  let result = [numma, denuma];
  return result;
}
