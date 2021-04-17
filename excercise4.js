let arrDate = [];
// function randomDate(start, end) {
//   return new Date(
//     start.getTime() + Math.random() * (end.getTime() - start.getTime())
//   );
// }

function generateNextDate() {
  // let date = randomDate(new Date(1999, 1, 1), new Date());

  const day = new Date();
  const date = new Date(
    day.getFullYear(),
    day.getMonth(),
    day.getDate(),
    0,
    0,
    0,
    0
  );
  console.log(date.getDate());
  console.log(date.getMonth());

  let nextDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);
  while (arrDate.length < 10) {
    nextDate = new Date(nextDate.getTime() + 24 * 60 * 60 * 1000);
    let timeNextDate = nextDate.getTime();
    if (nextDate.getDate() % 2 === 0 && nextDate.getDay() === 1) {
      if (nextDate.getDate() <= 10) {
        continue;
      } else {
        arrDate.push(nextDate);
      }
    }

    timeNextDate = 24 * 60 * 60 * 1000 + timeNextDate;
    //  console.log("timeNextDate1", timeNextDate);
  }
  //console.log(arrDate);

  // console.log(date.getDate());
  // console.log(nextDate.getDate());
  // console.log(arrDate[0].getDay());
  // console.log(arrDate[0].getDate());

  // console.log(arrDate[1].getDay());
  // console.log(arrDate[1].getDate());

  // console.log(arrDate[2].getDay());
  // console.log(arrDate[2].getDate());

  // console.log(arrDate[3].getDay());
  // console.log(arrDate[3].getDate());

  // console.log(arrDate[4].getDay());
  // console.log(arrDate[4].getDate());

  // console.log(arrDate[5].getDay());
  // console.log(arrDate[5].getDate());

  // console.log(arrDate[6].getDay());
  // console.log(arrDate[6].getDate());

  // console.log(arrDate[7].getDay());
  // console.log(arrDate[7].getDate());

  // console.log(arrDate[8].getDay());
  // console.log(arrDate[8].getDate());

  // console.log(arrDate[9].getDay());
  // console.log(arrDate[9].getDate());

  //console.log(arrDate);
}
generateNextDate();

let periodTimeArray = [];

const dateNow = new Date();

console.log(arrDate.length);
arrDate.forEach((value) => {
  let periodTime = {
    date: "",
    countdown: "",
  };
  console.log("value", value);
  console.log("dayNow", dateNow);
  let diff = value.getTime() - dateNow.getTime();
  let days = diff / (24 * 60 * 60 * 1000);
  let phandu = diff % (24 * 60 * 60 * 1000);
  let hours = phandu / (60 * 60 * 1000);
  let hours1 = phandu % (60 * 60 * 1000);
  let minutes = hours1 / (60 * 1000);
  let minutes1 = hours1 % (60 * 1000);
  let second = minutes1 / 1000;
  console.log("day", days);
  periodTime.countdown =
    Math.floor(days) +
    " days " +
    Math.floor(hours) +
    " hours " +
    Math.floor(minutes) +
    " minutes," +
    Math.floor(second) +
    " seconds";
  //console.log(hours);

  let date = value.getDate();
  let month = value.getMonth() + 1;
  let year = value.getFullYear();
  periodTime.date = date + "-" + month + "-" + year;

  periodTimeArray.push(periodTime);
});

console.log(periodTimeArray);
