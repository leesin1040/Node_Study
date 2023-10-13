// 단축 속성명 : property shortheand
const name = 'nbc';
const age = '30';

//key-value
const obj = {
  name: name,
  age: age,
};
//위 내용은 아래와 같이 생략할 수 있다. -키와 값이 같기 때문에 생략 가능
const obj1 = { name, age };

//전개구문 = spread operator ~열어버리기
let arr = [1, 2, 3];
// console.log(arr);
// console.log(...arr);

let newArr = [...arr, 4];
console.log(arr);
console.log(newArr);
