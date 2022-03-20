const Event = require("./Event");

const EventEmitter = require("events");

class myEvent extends EventEmitter {}

//intialize objects
const MyEvent = new myEvent();

MyEvent.on("fire", (name, age) => Event(name, age));

MyEvent.emit("fire", "Mg Mg", "12");
