// prime numbers
function isPrime() {
  for (let i = 1; i <= 541; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        count = 1;
        break;
      }
    }
    if (i > 1 && count == 0) {
      console.log(i);
    }
  }
}
isPrime();

//print patterns

const patterns = () => {
  let storage = "";
  let num = 68;
  for (let i = 1; i <= 4; i++) {
    storage += String.fromCharCode(num);
    num++;
    console.log(storage);
  }
};
patterns();

//random no user validation

const validation = () => {
  const userInp = prompt(`Enter Your Number`);
  const randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum);

  if (userInp !== randomNum) {
    alert(`Not a correct number please try again`);
  } else {
    alert(`You have guessed the number ${randomNum}`);
  }
};
validation();

// Consider one integer array. Update the array as per the following requirements:
// - If the element is negative number then make the square of the number
// - Keep the 0 as is
// - If the number is positive even number then add the same even number to that
// - If the number is positive odd number then print the next odd number to that
// Ex. {0, 13, 5, -4, 6} --> {0, 15, 7, 16, 12}

const arr = [0, 13, 5, -4, 6];
let finalarr = [];
const filterdarr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] **= 2;
    } else if (arr[i] % 2 == 0) {
      arr[i] += arr[i];
    } else if (arr[i] % 2 != 0) {
      arr[i] += 2;
    }
    finalarr.push(arr[i]);
  }
  return finalarr;
};
filterdarr(arr);
console.log(finalarr);
