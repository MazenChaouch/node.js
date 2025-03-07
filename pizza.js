const eventEmiter = require("events");
const pizza = new eventEmiter();

pizza.on("order", (size, topping) => {
  console.log(`your order is A ${size} pizza with a ${topping}`);
  setTimeout(() => {
    console.log(`your ${size} pizza with ${topping} is ready`);
  }, 2000);
});
pizza.on("checkout", (price) => {
  console.log(`your checkout is ${price}`);
  setTimeout(() => {
    console.log(`payment done!`);
  }, 2000);
});

pizza.emit("order", "xl", "papperoni");
pizza.emit("checkout", 150);
