//조건부 실행

let x = 10;

// if (x > 0) {
//   console.log('x는 양수입니다');
// }

// and 조건(&&)
x > 0 && console.log('x는 양수입니다');

//or 조건 (||)
let y; //y는 undefined
let z = y || 20; //y가 defiend 이면 우측 값으로 세팅

console.log(z);
