//this  - this keywowrd is a little different from other OOP langauage
//binding is set when object is created. 

const testFunction = function(){
    return this;
}

testFunction();
console.log(testFunction()===global); //return true

//apply(), call(), bind()

function returnName(){
    return this.name;
}

const yujin3 = {
    name:'yujin',
}

//call take arguemnts based on comma & apply takes arguemnts as list
console.log(returnName.call(yujin3)); //yujin
console.log(returnName.apply(yujin3)); //yujin

function multiply(x,y,z){
    return '${this.name} / result: ${x*y*z}';
}

console.log(multiply.call(yujin3, 3,4,5));
console.log(multiply.apply(yujin3, [3,4,5]));

//unlike apply and call, bind() doesn't execute immediately. 