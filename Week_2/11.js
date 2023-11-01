function solution(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  let al = arr.length / 2;
  return arr[Math.floor(al)];
}
arr = [1, 2, 7, 10, 11];
console.log(solution(arr));
