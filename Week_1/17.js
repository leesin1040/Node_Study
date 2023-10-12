// function solution(s) {
//   // 문자열 s에서 소문자 'p'와 'y'의 개수를 세기 위한 변수 초기화
//   let pcnt = 0;
//   let ycnt = 0;

//   // 문자열을 순회하면서 'p'와 'y'의 개수 세기
//   for (let i = 0; i < s.length; i++) {
//     // 대문자로 변환한 문자와 비교하여 개수 세기
//     if (s[i].toUpperCase() === 'P') {
//       pcnt++;
//     } else if (s[i].toUpperCase() === 'Y') {
//       ycnt++;
//     }
//   }

//   // 'p'와 'y'의 개수 비교 후 결과 반환
//   return pcnt === ycnt;
// }

// // 예제 테스트
// console.log(solution('pPoooyY')); // true
// console.log(solution('Pyy')); // false

// function solution(num1, num2) {
//   return num1 * num2;
// }

// console.log(solution(num1,num2));

// //참고중
// function add(x, y) {
//   return x + y;
// }

// let add2 = function (x, y) {
//   return x + y;
// };

// // console.log(add2(10, 20));

// let functionResult = add(20, 30);
// console.log(functionResult);

// let sum = (a, b) => a + b;

// /* 위 화살표 함수는 아래 함수의 축약 버전입니다.

// let sum = function(a, b) {
//   return a + b;
// };
// */

// alert( sum(1, 2) ); // 3

// let solution = (num1, num2) => num1 % num2;

function solution(num1, num2) {
  return Math.floor(num1 / num2);
}

let num1 = 10;
let num2 = 5;
console.log(solution(num1, num2));
