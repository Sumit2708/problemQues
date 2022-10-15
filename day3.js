// Given an array A of N elements. Find the majority element in the array. A majority element in an
// array A of size N is an element that appears more than N/2 times in the array.

const arr = [3, 3, 1, 8, 3];
const n = 5;
const majorityEle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count += 1;
      }
    }
    if (count > n / 2) {
      return arr[i];
    } else {
      return -1;
    }
  }
};
const result1 = majorityEle(arr);
console.log(result1);

// find out extra leeter and return it
const s = "abcd";
const t = "abcde";
let str1 = s.split("");
let str2 = t.split("");
let extra = "";
const extraWord = (str1, str2) => {
  for (let i = 0; i < str2.length; i++) {
    if (str1[i] !== str2[i]) {
      console.log(str2[i]);

    }
  }
};
const result2 = extraWord(s, t);
console.log(result2);

// String reverse

const str = 'sumit'
let subString = ''
const reverseString = (str)=>{
  for(let i = str.length-1;i>=0;i--){
    subString+=str[i]
  }
  return subString
}
const result3 = reverseString(str)
console.log(result3)


 
//array concatantion

const A = [1,2,3]
const B = [4,5,6]
let len = A.length
const merging = (A,B)=>{
  for(let i=0;i<B.length;i++){
    A[len++] = B[i]
  }
  return A
}
const result4 = merging(A,B)
console.log(result4)