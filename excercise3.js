const fetch = require("node-fetch");

var sum = { confirmed: 0, deaths: 0, recovered: 0 };

fetch("https://corona.lmao.ninja/v2/jhucsse")
  .then((response) => response.json())
  .then((data) => {
    // for (let i = 0; i < data.length; i++) {
    //   sum.confirmed += data[i].stats.confirmed;
    //   sum.deaths += data[i].stats.deaths;
    //   sum.recovered += data[i].stats.recovered;
    // }
    data.reduce((acc, value) => {
      sum.confirmed = acc.confirmed + value.stats.confirmed;
      sum.deaths = acc.deaths + value.stats.deaths;
      sum.recovered = acc.recovered + value.stats.recovered;
      return sum;
    }, sum);
    console.log(sum);
  })
  .catch((err) => console.log(err));
// getData();
