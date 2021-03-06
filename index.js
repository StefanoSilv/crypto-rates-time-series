const axios = require("axios");

module.exports = {
  getByDate: date => {
    return axios
      .get(`https://exchange-rates-library.herokuapp.com/rates?date=${date}`)
      .then(res => {
        return {
          currency: res.data.rate[0].target,
          rates: res.data.rate[0].rates[0],
          date: res.data.rate[0].date.toString().substr(0, 10)
        };
      })
      .catch(err => {
        return { err };
      });
  },
  getByPastDays: number => {
    let date = new Date();
    let pastDate = new Date(
      date.setDate(date.getDate() - number)
    ).toISOString();
    return axios
      .get(
        `https://exchange-rates-library.herokuapp.com/rates?date=${pastDate
          .toString()
          .substr(0, 10)}`
      )
      .then(res => {
        return {
          currency: res.data.rate[0].target,
          rates: res.data.rate[0].rates[0],
          date: res.data.rate[0].date.toString().substr(0, 10)
        };
      })
      .catch(err => {
        return { err };
      });
  },
  getLastMonth: () => {
    let date = new Date();
    let pastDate = new Date(date.setDate(date.getDate())).toISOString();
    let year = pastDate.toString().substr(0, 5);
    let month = (Number(pastDate.toString().substr(5, 2)) - 1)
      .toString()
      .padStart(2, "0");
    let day = pastDate.toString().substr(7, 3);
    let dateQuery = year + month + day;
    return axios
      .get(
        `https://exchange-rates-library.herokuapp.com/rates?date=${dateQuery}`
      )
      .then(res => {
        return {
          currency: res.data.rate[0].target,
          rates: res.data.rate[0].rates[0],
          date: res.data.rate[0].date.toString().substr(0, 10)
        };
      })
      .catch(err => {
        return { err };
      });
  },
  getLastYear: () => {
    let date = new Date();
    let pastDate = new Date(date.setDate(date.getDate())).toISOString();
    let year = (Number(pastDate.toString().substr(0, 4)) - 1).toString();
    let month = pastDate.toString().substr(4, 3);
    let day = pastDate.toString().substr(7, 3);
    let dateQuery = year + month + day;
    return axios
      .get(
        `https://exchange-rates-library.herokuapp.com/rates?date=${dateQuery}`
      )
      .then(res => {
        return {
          currency: res.data.rate[0].target,
          rates: res.data.rate[0].rates[0],
          date: res.data.rate[0].date.toString().substr(0, 10)
        };
      })
      .catch(err => {
        return { err };
      });
  },
  getLastWeek: () => {
    let date = new Date();
    let pastDate = new Date(date.setDate(date.getDate() - 7)).toISOString();
    return axios
      .get(
        `https://exchange-rates-library.herokuapp.com/rates?date=${pastDate
          .toString()
          .substr(0, 10)}`
      )
      .then(res => {
        return {
          currency: res.data.rate[0].target,
          rates: res.data.rate[0].rates[0],
          date: res.data.rate[0].date.toString().substr(0, 10)
        };
      })
      .catch(err => {
        return { err };
      });
  },
  getToday: () => {
    let date = new Date();
    let pastDate = new Date(date.setDate(date.getDate())).toISOString();
    return axios
      .get(
        `https://exchange-rates-library.herokuapp.com/rates?date=${pastDate
          .toString()
          .substr(0, 10)}`
      )
      .then(res => {
        return {
          currency: res.data.rate[0].target,
          rates: res.data.rate[0].rates[0],
          date: res.data.rate[0].date.toString().substr(0, 10)
        };
      })
      .catch(err => {
        return { err };
      });
  },
  getYesterday: () => {
    let date = new Date();
    let pastDate = new Date(date.setDate(date.getDate() - 1)).toISOString();
    return axios
      .get(
        `https://exchange-rates-library.herokuapp.com/rates?date=${pastDate
          .toString()
          .substr(0, 10)}`
      )
      .then(res => {
        return {
          currency: res.data.rate[0].target,
          rates: res.data.rate[0].rates[0],
          date: res.data.rate[0].date.toString().substr(0, 10)
        };
      })
      .catch(err => {
        return { err };
      });
  }
};
