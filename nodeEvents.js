const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Alert', () => {
  console.log('Please Wake Up!!!');
  setTimeout(() => {
    console.log('You are late for the class!!!');
  }, timeout = 3000);
});

console.log('Waiting for the Alert...');
myEmitter.emit('Alert');
console.log('Waiting for the Alert...');
