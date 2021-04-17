var arrText = [];
var resultArr = [];
function randomText() {
  let text = [];
  const letter = "abcdef";
  for (let i = 0; i < 8; i++) {
    //
    text.push(letter.charAt(Math.floor(Math.random() * letter.length)));
  }
  return text.join("");
}

function randomArrText() {
  // console.log(randomText());
  for (let i = 0; i < 200; i++) {
    arrText.push(randomText());
  }
  // console.log(arrText.length);

  console.log(arrText);
}
randomArrText();

function check() {
  // for (let i = 0; i < arrText.length; i++) {
  //   // console.log(arrText[i]);
  //   if (arrText[i].indexOf("f") === 7) {
  //     //console.log("lala");
  //     arrText.push(arrText[i]);
  //   }
  // }

  const newArr = arrText.filter((val, index) => {
    // if (val.indexOf("a") > -1) {
    //   if (val.indexOf("c") === -1) {
    //     if (val.indexOf("f") === val.length - 1) {
    //       return val;
    //     }
    //   }
    // }
    const regex = /.+f$/;
    const isLastF = regex.test(val);
    if (val.includes("a") && !val.includes("c") && isLastF) {
      return val;
    }
  });
  console.log(newArr);
}
check();
