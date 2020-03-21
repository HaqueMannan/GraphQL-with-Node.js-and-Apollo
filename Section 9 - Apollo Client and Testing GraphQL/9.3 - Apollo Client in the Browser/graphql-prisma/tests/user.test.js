import { getFirstName, isValidPassword } from '../src/utils/user.js';

test('should return first name when given full name', () => {
   const firstName = getFirstName('John Doe');

   // if(firstName !== 'Andrew') {
   //    throw new Error('Expected the string Andrew');
   // };

   expect(firstName).toBe('John');
});

test('should return first name when given first name', () => {
   const firstName = getFirstName('Bella');
   expect(firstName).toBe('Bella');
});

test('should reject password shorter than 8 characters', () => {
   const isValid = isValidPassword('abc123');
   expect(isValid).toBe(false);
});

test('should reject password that contains word password', () => {
   const isValid = isValidPassword('abcPassword012');
   expect(isValid).toBe(false);
});

test('should correctly validate a valid password', () => {
   const isValid = isValidPassword('123abc567def!');
   expect(isValid).toBe(true);
});