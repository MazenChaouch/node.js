console.log("start");
syncFn();
console.log("end");

function syncFn() {
  for (let index = 0; index < 1e10; index++) {}
  console.log("loop completed");
}
