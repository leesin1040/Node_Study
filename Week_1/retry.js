// //정수 num1과 num2가 매개변수로 주어집니다.
// //두 수가 같으면 1 다르면 -1을 retrun하도록
// //solution 함수를 완성해주세요.
// let num1 = 11;
// let num2 = 11;

// function solution(num1, num2) {
//   if (num1 >= 0 && num1 <= 10000 && num2 >= 0 && num2<= 10000) {
//     (num1 === num2)
//     return 1;
//   } else {
//     return -1;
//   }
// }

// console.log(solution(num1, num2));

// function solution(num1, num2) {
//   if (num1 === num2) {
//     return 1;
//   } else {
//     return -1;
//   }
// }

//1. denum : numer1 , num : denom1 ...
//2. 두 분수를 더한 값을 구한다.
//3. 기약분수로 나타낸다. > 약분
//4. denum num를 순서대로 배열한다.

function solution(denum1, numer1, denum2, numer2) {
  var answer = [];
  //분자
  const num = numer1 * denum1 + numer2 * denum2;
  //분모
  const denum = denum1 * denum2;

  let getGCD = (denum, num) =>
    denum % num === 0 ? num : getGCD(num, denum % num);

  answer[0] = denum / getGCD(a, b);
  answer[1] = num / getGCD(a, b);
  return answer;
}

///???????????어캐햤누
function cal_gcd(a, b) {
  return a % b === 0 ? b : cal_gcd(b, a % b);
}

function solution(denum1, num1, denum2, num2) {
  let denum = denum1 * num2 + denum2 * num1;
  let num = num1 * num2;
  let gcd = cal_gcd(denum, num);

  // 최대 공약수를 분자 분모에 나누고 배열에 넣기
  return [denum / gcd, num / gcd];
}
