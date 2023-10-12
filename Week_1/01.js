//변수의 5가지 주요 개념
//변수 이름 : 저장된 값의 고유 이름 -아래 myVar
//변수 값 : 변수에 저장된 값 - 아래 "Hello World"
//변수 할당 : 변수에 값을 저장하는 행위
//변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
//변수 참조 : 변수에 할당된 값을 읽어오는 것

//변수를 선언하는 3가지 방법 : var, let, const
//1. var
var myVar = 'Hello World';
console.log(myVar);
var myVar = 'var는 변경이 가능하다';
console.log(myVar);
myVar = 'var는 할당 변경이 가능하다';
console.log(myVar);

//2. let
let myLet = 'Hello World';
console.log(myLet);
myLet = 'let 값 변경할당 가능하다';
console.log(myLet);

//3. const
const myConst = 'hello World';
console.log(myConst);
