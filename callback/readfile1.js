const { readFile } = require("fs");

readFile("test.txt", "utf-8", (err, data) => {
  // （註一）
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  // insert to mysql （註二）
});

let readFile = function (err, date) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`error ${job}`);
    }, timer);
  });
};

// （註一）callback設計原則：第一個錯誤err，第二個資料data

// （註二）關於insert to mysql
// eadFile是非同步函式，想像一下外包公司會馬上把工作做完然後結束，所以必須要在他們工作做完以前，把數據寫數資料庫（insert to mysql）。
// 如果沒有這樣做，新接的程序是沒有數據可以寫入資料庫的。
