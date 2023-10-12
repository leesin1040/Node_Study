//for, while => ~동안 : 반복문
//for (초기값; 조건식; 증감식) {}

//i 라는 변수를 0부터 시작할거야
//i라는 변수가 10에 도달하기 전까지 계속할거야
//i라는 변수는 한 사이클이 돌고 나면 1을 더할거야

// for (let i = 0; i < 10; i++) {
//   console.log('for문이 돌아가고 있습니다' + i);
// }

// const arr = ['one', 'two', 'tree', 'four', 'five'];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
//   console.log(arr[i]); //arr에 있는 i도 같이 찍어줄거야
// }

//문제 : 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력하는 예시

// for (let i = 0; i < 11; i++) {
//   if (i >= 2) {
//     if (i % 2 === 0)
//       //2의 배수
//       console.log(i + '는 2의 배수입니다.');
//   }
// }

//for ~in문
//객체 속성을 출력하는 문법

let person = {
  name: 'John',
  age: 30,
  gender: 'male',
  height: 180,
};

for (let key in person) {
  console.log(key + ':' + person[key]);
}
