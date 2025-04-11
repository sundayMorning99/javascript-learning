/**
 * Data Types
 * six primitive types: 1)Number, 2)String, 3)Boolean, 4)undefined, 5)null, and 6)symbol 
 * one object type: Object - Function, Array, Object....
 */

const age = 32;
const temperature  = -10;
const pi=3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);

const infinity = Infinity  //these are also number type
const nInfinity = -Infinity; //negative infinity

let groupName = 'michael';
console.log('${groupName} jackson');

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); // this returns false.

const dictionary = {
    red:'red',
    orange:'orange',
    yellow:'yellow'
}

console.log(dictionary); // this is object type  key:value pair

//Array type
const iveMembersArray =[
    'holy s',
    'you kidding me',
    'you are fine'
]

console.log(iveMembersArray[0]); // this is object type.


//Array.from() creates a new, shallow-copied array instance from an arrayLike or iterable object.
// From a string
const str = 'hello';
const arrFromStr = Array.from(str);
console.log(arrFromStr); // Output: ["h", "e", "l", "l", "o"]

// From a Set
const set = new Set([1, 2, 2, 3]);
const arrFromSet = Array.from(set);
console.log(arrFromSet); // Output: [1, 2, 3]

// From a Map (gets entries as key-value pairs)
const map = new Map([['a', 1], ['b', 2]]);
const arrFromMap = Array.from(map);
console.log(arrFromMap); // Output: [["a", 1], ["b", 2]]

// With a mapping function
const numbers = [1, 2, 3];
const squaredNumbers = Array.from(numbers, x => x * x);
console.log(squaredNumbers); // Output: [1, 4, 9]

// From an object with a length property (array-like object)
const arrayLike = { length: 3, 0: 'a', 1: 'b', 2: 'c' };
const arrFromArrayLike = Array.from(arrayLike);
console.log(arrFromArrayLike); // Output: ["a", "b", "c"]