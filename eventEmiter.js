const eventEmiter = require("events");
const event = new eventEmiter();

event.on("trigger", () => {
  console.log("event triggred!");
});

event.emit("trigger");
