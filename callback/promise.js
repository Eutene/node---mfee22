let dt = new Date();
console.log(`Start ${dt.toISOString()}`);

let doWork = function (job, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`完成工作 ${job}`);

      // 如果發生錯誤
      // reject(err)
    }, time);
  });
};

// let work1Promise = doWork("刷牙", 2000);
// work1Promise.then((result) => {
//     let dt = new Date();
//     console.log(`${result} at ${dt.toISOString()}`);
// });

doWork("刷牙", 2000)
  .then((result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);

    return doWork("吃早餐", 3000); // 新承諾
  })
  .then((result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);

    return doWork("寫功課", 3000); // 新承諾
  })
  .then((result) => {
    let dt = new Date();
    console.log(`${result} at ${dt.toISOString()}`);
  })
  .catch((err) => {
    //   處理錯誤，抓前面所有的承諾任一個被拒絕的地方
    //   只要有一個承諾被拒絕，後面都會被跳過
    console.error(err);
  });

// 不可以再寫callback喔

// Promise 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。

// 1. Promise 是一個物件
// new Promise()
// Promise() 是一個建構式，他需要一個參數 executor
// 這個 executor 也是一個函式 function() 也有兩個參數 resolve reject
// 2. 即將完成、或失敗
// resolve 是成功的時候要呼叫的
// reject 是失敗的時候要呼叫
// 3. 非同步

// Promise 物件會有狀態的移轉
// 剛建立的時候狀態會是 pending
