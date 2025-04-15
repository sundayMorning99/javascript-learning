//DRY --> Don't Repeat Yourself
function multiply(x, y=10){
    console.log(x*y);
}
multiply (2); //returns 20 because y was not entered and 10 was assigned to y.


function multiply(x,y){
    return x*y;
}

const result1 = multiply(2,4); // result1 has 8.


//Arrow function
const multiply2 = (x,y) =>{
    return x*y;
}
console.log(multiply2(3,4));


//brief version of arrow function
const multiply3 = (x,y) => x*y;


//if one variable, you can skip ()
const multiply4 = x =>x*2;
console.log(multiply4(2)); //returns 4

//more than one arrow
function multiply5(x){
    return function(y){
        return function(z){
            return `x:${x} y:${y} z:${z}`  //template literal
        }
    }
}

const multiply5 = x => y => z => `x:${x} y:${y} z:${z}`;

console.log(multiply5(3)(4)(5));


//unfixed number of arguments
//reduce method multiply each arguments
const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a,b)=> a*b, 1);
}

console.log(multiplyAll(3,4,5,6)); // 

//immediately invoked function
//notice that there's no function name. - memorize the syntax to use it.
(function(x,y){
    console.log(x*y);
})(4,5)

console.log(typeof multiply); // returns function
console.log(multiply instanceof Object); // returns true
