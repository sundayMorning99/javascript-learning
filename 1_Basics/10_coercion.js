let age=32;

let stringAge = age.toString();
console.log(typeof stringAge, stringAge);  //returns string 32

let test = age + '';
console.log(typeof test, test); // returns string 32

console.log('98'+2); //returns 982  - 2 converts to '2'
console.log('98' * 2); // return 196 - because there's multiplication in string '98' converts to 98.
console.log('98' - 2); //return 96 - because there's no substract in string '98' converts to 98.

//toString()
console.log(typeof (99).toString());

//Convert to number
console.log(typeof parseInt('0'), parseInt('0.99')); //returns number 0

//boolean conversion
console.log(!!'x'); //  !!'any string' returns true
console.log(!!''); // returns false
console.log(!!0); //false
console.log(!!'0'); //true
console.log(!!false); //false
console.log(!!'false'); //true
console.log(!!undefined); //false
console.log(!!null); //false

console.log(!!{}); // !! object -->returns true
console.log(!![]); //!! array --> returns true
