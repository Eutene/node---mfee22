let readFilePromise = new Promise((resolve, reject) => {
  readFile("text.tx", "utf-8", (err, date) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(date);
  });
});

console.log(readFilePromise); // 單到這裡，都還是等待尚未執行的狀態

readFilePromise
  .then((result) => {
    console.log(`這是 Promise 的 result: ${result}`);

    // insert data to db
  })
  .catch((err) => {
    console.log("Promise 的 catch:" + err);
  });

// const { readFile } = require("fs");

// readFile("test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
//   insert to mysql
// });
