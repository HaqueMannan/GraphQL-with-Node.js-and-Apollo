// Can select some or all exports from the file.
import myCurrentLocation, { message, name, getGreeting } from './myModule';
// import myCurrentLocation from './myModule';
import addFunction, { subtract } from './math';

console.log(message);
console.log(name);
console.log(myCurrentLocation);
console.log(getGreeting('Alex'));

console.log(addFunction(1, 2));
console.log(subtract(5, 3));