let name = "年";

console.log(`Hello Node from ${name}`);

console.log("start");
setTimeout(function () {
  console.log("Timeout");
}, 1000);
console.log("end");
