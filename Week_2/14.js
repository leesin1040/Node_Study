// 양꼬치 10개 = +음료수 하나
// 양꼬치 1인분에 12000, 음료수는 2000
// 양꼬치 1인분 12000 = n
// 음료수는 1개 2000 = k
//변수를 주고 얼마 지불해야하는지 계산하는 식을 만들어라.
let lamb = 12000;
let juice = 2000;
// function solution(n, k) {
//   let answer = 0;
//   if (n > 10) {
//     k - 1;
//     answer = lamb * n + juice * k;
//     return answer;
//   } else {
//     answer = lamb * n + juice * k;
//     return answer;
//   }
// }
// console.log(solution(10, 3));

function solution(n, k) {
  let finalK = k;
  for (let i = 0; i < n; i++) {
    if (i % 10 === 0) {
      finalK - 1;
    }
  }console.log(finalK);
}

solution(10, 3);
