// //while 문
// let i = 0;

// //i가 10보다 작을때까지만 하겠다.
// while (i < 10) {
//   console.log(i);
//   i++;
// }

//while 문을 활용해서, 3초과 100미만의 숫자 중 5의 배수인 것만 출력하는 예

// let i = 3;
// while (i < 100) {
//   if (i % 5 === 0 && i >= 5) {
//     console.log(i + '는 5의 배수입니다.');
//   }
//   i++;
// }

// do~while 문

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

//break문
// for (let i = 0; i < 11; i++) {
//   if(i===5){
//     break; //멈춰라
//   }
//   console.log(i);
// }

//continue 문
for (let i = 0; i < 11; i++) {
  if (i === 5) {
    continue; //5번에서 넘어가라 = 5가 안찍힌다
  }
  console.log(i);
}
