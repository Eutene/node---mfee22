// 迴圈解

function sum(n) {
  for (let i = 0; i <= n; i++) {
    let result = 0;
    result += i;
  }
  return result;
}

// result = 1 + 2 + 3 + ... + n
// console.log(sum(1)); // 1
// console.log(sum(2)); // 3
// console.log(sum(5)); // 15
// console.log(sum(10)); // 55


// 遞迴解 recursive

function sum(n){
  if (n < 1)
    return 0;
  return n + sum (n - 1);
}

// ruducer解

count sum = (n) =>{
  arr = [];
  const reducer = (perValue, curValue) => perValue + curValue;
  for (i =1; i <= n; i++){
    arr.push(i);
  }
  let result = arr.reduce(reduce, 0);
  return result;
}

// 梯形公式解

for(let i)

function sum1(n){
let result = ((1 + n) * n) / 2;
return result;
}

// 壓力測試

console.time("for");
for (let i = 1; i <=10000; i++){
  sum(100000)
}
console.timeEnd("for");


console.time("formula");
for(let i = 1; i <=10000; i++){
  sum1(10000);
}
console.timeEnd("formula");


