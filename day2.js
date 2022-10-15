// Given a sorted array arr[] of size N and a number X, find a pair in the array whose sum is closest to X.
let arr = [10, 22, 28, 29, 30, 40];
let N = 6;
let X = 32;

const twoSum = (arr, X, N) => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i] + arr[j]=== X) {
        return arr[i], arr[j];
      }
    }
  }
  return `No match found`;
};
const result1 = twoSum(arr, X, N);
console.log(result1);

// Given two strings 'str1' and 'str2', check if these two strings are isomorphic to each other.
// Two strings str1 and str2 are called isomorphic if there is a one to one mapping possible for every
// character of str1 to every character of str2 while preserving the order

let str1 = "aab";
let str2 = "xxy";
let obj1 = {};
let obj2 = {};
let isomorphic = (str1, str2) => {
  for (let i = 0; i < str1.length; i++) {
    if (obj1[str1[i]] !== obj2[str2[i]]) {
      return `Not an Isomorphic`;
    } else {
      obj1[str1[i]] = i;
      obj2[str2[i]] = i;
    }
  }
  return `Both strings are Isomorphic to each other`;
};
const result2 = isomorphic(str1, str2);
console.log(result2);

// Reverse a stack with two helper stacks.
const stack = [1, 2, 3, 4, 5];

let data = [];
let dataSize = data.length;

const push = (newVal) => {
  data[dataSize] = newVal;
  dataSize += 1;
};

const pop = () => {
  lastItem = data[dataSize - 1];
  dataSize -= 1;
  return lastItem;
};

const reversestack = (stcak) => {
  for (let i = 0; i < stcak.length; i++) {
    push(stcak[i]);
  }
  for (let i = 0; i < stcak.length; i++) {
    stcak[i] = pop();
  }
};
reversestack(stack);
console.log(stack);

// Given a 2D array arr[][] of order NxN, the task is to find the sum of all the elements present in
// both the diagonals and boundary elements of the given arr[][].

const arr2 = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
];

let sum = 0;

const allSum = (arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
      sum += arr2[i][j];
    }
  }
  return sum;
};

console.log(allSum(arr2));
