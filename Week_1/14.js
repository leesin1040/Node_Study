let person = {
  name: '홍길동',
  age: 30,
  gender: 'man',
};

//key값 가져오기 - keys
let keys = Object.keys(person);
console.log('keys ==> ', keys);

//value값 가져오기 - values
let values = Object.values(person);
console.log('values ==> ', values);

//entries
//key와 value값 묶어서 배열
let entries = Object.entries(person);
console.log('entries ==> ', entries);

//assign
//복사
let newPerson = {};
Object.assign(newPerson, person);
console.log('newPerson ==>', newPerson);

//오브젝트 값 변경
let newPerson = {};
Object.assign(newPerson, person, { age: 33 });
console.log('newPerson ==>', newPerson);

//위 값은 주석화 하지 않으면 작동 안됨~

//객체 병합

let person1 = {
  name: '홍길동',
  age: 30,
};

let person2 = {
  gender: 'man',
};
//...spread operator 다 풀어헤쳐~
let perpectMan = { ...person1, ...person2 };
console.log(perpectMan);
