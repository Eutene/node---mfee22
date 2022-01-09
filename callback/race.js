// promise.all.js 開始

// 同時外包三件工作出去，但希望都做完了再告訴我
// 但不會知道哪個先完成喔
// 因為是一起執行，所以總共只有花費三秒(找時間最長的那個就是總費時間)

// let p1 = doWork("刷牙", 2000);
// let p1 = doWork("吃早餐", 3000);
// let p1 = doWork("寫作業", 2000);

// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values);
// });

// promise.all.js 結束
// ------
// promise.race.js 開始

// race 比賽
// 只要其中一個做完就會回覆

let p1 = doWork("刷牙", 2000);
let p1 = doWork("吃早餐", 3000);
let p1 = doWork("寫作業", 2000);

Promise.all([p1, p2, p3]).then((value) => {
  console.log(values);
});

// 完成工作 吃早餐
// promise.race.js 開始
