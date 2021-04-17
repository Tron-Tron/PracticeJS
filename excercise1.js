let arrSum = [];
function isNumber(number) {
  if (typeof number === "number" && number !== NaN && number !== Infinity) {
    return true;
  }
}

const arr = new Array(10);
const r = Array.from(arr.keys(), (v, k) => k + 1);

// for (let i = 1; i < 101; i++) {
//   i = Math.floor(Math.random() * 101) + 1;
//   if (isNumber(i)) {
//     newArr = arr.push(i);
//   }
// }
// console.log(r);

function isPrime(number) {
  if (isNumber(number)) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
  }

  return true;
}

let newArrSum = [];

function checkPairSum() {
  // for (let i = 0; i < r.length; i++) {
  //   for (let j = 1; j < r.length; j++) {
  //     let sum = r[i] + r[j];
  //     if (isPrime(sum)) {
  //       let arrSumItem = [];
  //       arrSumItem.push(r[i]);
  //       arrSumItem.push(r[j]);
  //     }
  //     //  newArrSum.push(arrSumItem);
  //   }
  // }
  // let index = 0;
  // let len = r.length;

  // r.forEach((value) => {
  //   // let x = r.shift();
  //   // console.log(r);
  //   if (index !== len - 1) {
  //     r.slice(index + 1).forEach((value1) => {
  //       if (value1 > value) {
  //         let sum = value + value1;
  //         if (isPrime(sum)) {
  //           newArrSum.push([value, value1]);
  //         }
  //       }
  //       // if (!isPrime(value1 + value)) return;
  //       // newArrSum.push([value, value1]);
  //     });
  //     index++;
  //   }

  //   // r.unshift(x);
  // });

  [...r].forEach((value) => {
    r.shift();
    r.forEach((value1) => {
      if (value1 > value) {
        let sum = value + value1;
        if (isPrime(sum)) {
          newArrSum.push([value, value1]);
        }
      }
      // if (!isPrime(value1 + value)) return;
      // newArrSum.push([value, value1]);
    });

    // r.unshift(x);
  });
  newArrSum.sort(function (a, b) {
    let sum1 = a[0] + a[1];
    let sum2 = b[0] + b[1];
    if (sum1 > sum2) {
      return 1;
    }
    if (sum1 < sum2) {
      return -1;
    }
    return 0;
  });
  console.log("new arrSum", newArrSum);
  // console.log(
  //   "newArrSum",
  //   arrSum.sort(function (a, b) {
  //     return a - b;
  //   })
  // );
}
checkPairSum();
