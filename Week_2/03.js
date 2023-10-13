// Set
// - 고유한 값을 저장하는 자료구조
// - 값만 저장
// - key는 저장 안함
// - 중복되지 않는 값들로만 구성
// - 값 추가, 검색, 삭제, 모두 제거, 존재여부 확인 가능

const mySet = new Set(); // Set 생성
mySet.add('value1'); // 값 추가
mySet.add('value2'); // 값 추가
mySet.add('value2'); // 중복값은 들어가지 않는다.
mySet.add('value3');
mySet.add('value5');
mySet.add('value9');

console.log(mySet.size); // Set의 사이즈, 길이 확인
console.log(mySet.has('value1')); // 존재여부 확인
console.log(mySet.has('value2'));
console.log(mySet.has('value3'));

for (const value of mySet.values()) {
  console.log(value);
}
