//  Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.

const A = [3, 2, 1, 56, 10000, 167];
let N = 6;
let temp;
let min = "";
let max = "";
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (A[j] >= A[j + 1]) {
      temp = A[j];
      A[j] = A[j + 1];
      A[j + 1] = temp;
    }
  }
}

for (let i = 0; i < N; i++) {
  min = A[0];
  max = A[i];
}

console.log(`Min value is ${min}, Max value is ${max}`);

// Given two strings denoting non-negative numbers X and Y. Calculate the sum of X and Y.

let X = "25";
let Y = "23";

let result = Number(X) + Number(Y);
console.log(result);

// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

const arr = [1, 2, 3, -2, 5];
const len = 5;
let sum = 0;
const sumAll = (arr) => {
  for (let i = 0; i < len; i++) {
    sum += arr[i];
    if (sum <= 0) {
      return -1;
    }
  }
  return sum;
};

console.log(sumAll(arr));

//on which positions Target element comes
const nums = [1, 2, 5, 2, 3];
const target = 2;
let position = [];

const indexpos = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      position.push(i);
    }
  }
  return position;
};

const result3 = indexpos(nums, target);
console.log(result3);
