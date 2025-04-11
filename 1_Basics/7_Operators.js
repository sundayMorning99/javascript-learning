let result =1;
let number =1;
result ++;
console.log(result);

result = number ++; //assign and then increase number
result = --number; //decrease and then assign

sample = true;
console.log(+sample);  // returns 1
console.log(typeof +sample);  // returns 'Number'

sample = false;
console.log(+sameple); // returns 0
console.log(typeof +sample); // returns 'Number'

console.log(5 == 5); //true
console.log(5 == '5'); //true
console.log(0 == ''); // true
console.log(true == 1); //true
console.log(false ==0); //true
console.log(true =='1'); //true

console.log(5 === '5') // false   always use ===
console.log(5 !=='5'); // true

//Ternary operator
console.log(10>0 ? '10 is greater than 0' : '10 is less than 0');  //returns '10 is greater than 0

// && and ||
console.log(true && true); // true

//null 
name = name ?? 'codeFactory';
console.log(name);  //if name is null or undefined, return the value right to ?? - 'codeFactory'

name = name ?? 'jackson';
console.log(name); // name was assigend 'codeFactory' above. return 'codeFactory'

let name2;
name2 ??= 'jackson';
console.log(name2);  //return 'jackson'