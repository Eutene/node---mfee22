// Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。

// readfile3 開始
// const { readFile } = require("fs/promises");

// readFile("test.txt", "utf-8")
//   .then((result) => {
//     console.log(`這是內建的 promise 版本 ${result}`);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
// readfile3 結束

// 早餐 await版 開始
// let dt = new Date();
// console.log(`Start ${dt.toISOString()}`);

// async function schedule(){

//     let result = await doWork("刷牙", 2000);
//     let dt = new Date();
//     console.log(`${result} at ${dt.toISOString()}`);

//     let result2 = await doWork("吃早餐",3000);
//     let dt = new Date();
//     console.log(`${result} at ${dt.toISOString()}`);

//     let resul3 = await doWork("寫作業",2000);
//     let dt = new Date();
//     console.log(`${result} at ${dt.toISOString()}`);
// }
// schedule();
// 早餐 await版 結束

// readfile await版 開始 （錯的）

async function readfile() {
  const { readFile } = require("fs/promises");

  let result = await readFile("test.txt", "utf-8")
    .then((result) => {
      console.log(`這是內建的 promise 版本 ${result}`);
    })
    .catch((err) => {
      console.error(err);
    });
}
// readfile await版 結束 （錯的）

// 正解
const { readFile } = require("fs/promises");

(async () => {
  try {
    let result = await readFile("text.txt", "utf-8");
    console.log(`這是內建的 promise 版本 ${result}`);
  } catch (err) {
    console.error(err);
  }
})();
