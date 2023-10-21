function solution(numer1, denum1, numer2, denum2) {
  let numer = numer1 * denum2 + numer2 * denum1;
  let denum = denum1 * denum2;

  function getGcd(numer, denum) {
    let gcd = 1;
    for (let i = 2; i <= Math.min(numer, denum); i++) {
      if (numer % i === 0 && denum % i === 0) {
        gcd = i;
      }
    }
    return gcd; // 최대 공약수 반환
  }

  let gcd = getGcd(numer, denum); // 최대 공약수 계산
  let numerans = numer / gcd;
  let denumans = denum / gcd;

  return [numerans, denumans]; // 결과를 배열로 반환
}
