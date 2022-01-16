let car = require("./car");

// let {showNAme} = require("fs")
// showName();

// car.setName("AAAA");
// car.showName();
// 兩種寫法都是對的，看取捨

console.log(car.color);
car.color = "blue";
console.log(car.color);
car.setName("AAAA");
car.showName();


//模組來源
// 內建：fs
// require("fs")
// 第三方：mysql2, moment, axios, dotenv...
// require("mysql2")
// 自己開發的