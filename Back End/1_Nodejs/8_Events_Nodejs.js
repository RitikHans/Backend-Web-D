import { EventEmitter } from 'events';
import { setTimeout } from 'timers/promises';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log('Please Turn off the Motor');
  setTimeout(() => {
    console.log("Please Turn off the motor , A gentle Remainder ");
  }, 3000);
});


console.log("The script is running");
myEmitter.emit('WaterFull');
console.log("The script is still running");
myEmitter.emit('WaterFull');

