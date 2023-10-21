//1. 매개변수 numbers << 배열
//2. 원소 *2  배열이 나오게 만들기

function solution(numbers) {
  var answer = [];
  numbers.forEach((element) => {
    answer.push(element * 2);
  });
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
