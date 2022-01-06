function sum(n) {
  for (let i = 0; i <= n; i++) {
    let result = 0;
    result += i;
  }
  return result;
}

// result = 1 + 2 + 3 + ... + n

console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(5)); // 15
console.log(sum(10)); // 55
