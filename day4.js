//Array rotation

const A = [1, 2, 3, 4, 5];
const K = 2;
let temp;
const rotation = (A, K) => {
  for (let i = 0; i < K; i++) {
    temp = A[0];
    for (let j = 0; j < A.length; j++) {
      A[j] = A[j + 1];
    }
    A[A.length - 1] = temp;
  }
  return A;
};
const result = rotation(A, K);
console.log(result);

//anagram

const str1 = "madam";
const str2 = "adamm";

const isAnagram = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }
  let obj = {};
  for (let i of str1) {
    obj[i] = (obj[i] || 0) + 1;
  }
  for (let j of str2) {
    if (!obj[j]) {
      return false;
    }
    obj[j] -= 1;
  }
  return true;
};
const result2 = isAnagram(str1, str2);
console.log(result2);

//conunting unique nos

const arr = [1, 2, 2, 2, 3, 4, 4, 5];

const uniqueCount = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] != arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i+1
  }
};
const result3 = uniqueCount(arr);
console.log(result3);

////conunting unique nos by set method

const arr2 = [1, 2, 2, 2, 3, 4, 4, 5];
const newSet = new Set(arr2)
console.log(newSet)

