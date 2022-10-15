//insert element on an array

const arr = [1, 2, 4, 5];
let ele = 3;
let pos = 2;

const insertEle = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i >= pos) {
      arr[i + 1] = arr[i];
      if (i == pos) {
        arr[i] = ele;
      }
    }
  }
};
insertEle(arr);
console.log(arr);

//Delete an element

const arr2 = [1,2,2,3,4,5]
let delPos  = 2

const delElel =(arr2)=>{
    for(let i = delPos;i<arr2.length-1;i++){
        arr2[i] = arr2[i+1]
    }
}
delElel(arr2)
arr2.length = arr2.length-1
console.log(arr2)