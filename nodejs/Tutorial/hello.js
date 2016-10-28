// console.log("hello world");

// ○ non blocking （コールバック関数を使用）
setTimeout( function() {
  console.log("hello");
}, 1000);
console.log("world");

/*
// × blocking
var start = new Date().getTime();
while (new Date().getTime() < start + 1000);
console.log("world");
*/
