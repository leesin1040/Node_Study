// function solution(strings, n) {
//   let result = [];
//   for (let i = 0; i < strings.length; i++) {
//     strings[i] = strings[i][n] + strings[i];
//   }
//   strings.sort();
//   for(let j = 0; j < strings.length; j ++) {
//     strings[j] = strings[j].replace(strings[j][0],"");
//     result.push(strings[j]);
//   }

//   return result;
// }

// var a = 1;
// function outer() {
//   function inner() {
//     console.log(a);
//     var a = 3;
//   }
//   inner();
//   console.log(a);
// }
// outer();
// console.log(a);

function a() {
  console.log(b);
  var b = 'bbb';
  console.log(b);
  function b() {}
  console.log(b);
}

a();

console.log('-----------------------');
