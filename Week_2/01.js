const person = {
  name: 'John',
  age: 31,
  isMarried: true,
  sayHello: function () {
    //console.log("Hello, My name is" +this.name);
    console.log(`Hello, My name is ${this.name}`);
  },
};

person.sayHello();

const myArr = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
];
console.log(myArr[0](1, 3));
console.log(myArr[1](10, 7));
