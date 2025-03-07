const eventCoffee = require("events");
const events = new eventCoffee();

events.on("order", (type, size) => {
  //console.log(order reciverd : A ${type} coffee with ${size}.);
  setTimeout(() => {
    console.log(`Your order ${type} coffee with ${size} is confirmed!`);
  }, 2000);
});
events.on("checkout", (amount) => {
  setTimeout(() => {
    console.log(`The Amount ${amount} was well received`);
  }, 4000);
});

events.emit("order", "Cappuccino", "large");
events.emit("checkout", "5.00 USD");
