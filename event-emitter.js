const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on("bathDay",() => {
    console.log("Happy birthday to you!");
})

myEmitter.on("bathDay",(name) => {
    console.log(`Happy birthday to ${name}`);
})

myEmitter.emit("bathDay", "John"); // Output: Happy birthday to John