// Named Export - has a name, can have as many as needed.
// Default Export - has no name, can only have one.

const message = 'Some message from myModule.js';
const name = 'John Doe';
const location = 'London';
const getGreeting = (name) => {
   return `Welcome ${name}`;
}

export { message, name, getGreeting, location as default };