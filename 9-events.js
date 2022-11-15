/*
  EventEmitter.on : listen on a event
  EventEmitter.emit: trigger the event
*/
const EventEmitter = require("events");

const newEmitter = new EventEmitter();

newEmitter.on("nameEvent", () => {
  console.log("The event is triggered!");
});
newEmitter.emit("nameEvent");
