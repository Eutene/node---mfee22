const axios = require("axios");
const { readFile } = require("fs/promises");
const monent = require("moment");


(async () => {
  try {
    // 根據變數去抓取資料
    let stockNo = await resdFile ("stocl.txt", "utf-8");
    let queryDate = moment().format("YYYYMMDD"); //自動套用今天的時間

    // let response = await axios.get(
    //   `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${queryDate}&stockNo=${stockNo}`
    // );

    let response = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        // 這裡可以放一些設定
        // params: 放 query string 的參數
        params: {
          response: "json",
          date: queryDate,
          stockNo,
        },
      }
    );

    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
})();