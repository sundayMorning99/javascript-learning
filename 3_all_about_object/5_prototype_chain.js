
//On the top of reference, there is Object.prototype

function IdolModel(name, year){
    this.name=name;
    this.year=year;
}

IdolModel.prototype.sayHello = function(){
    return 'Hello, my name is ${this.name}.'; 
}

const yujin = new IdolModel('yujin', 2003);
console.log(yujin.sayHello());


//hasOwnProperty - if this is unique to this property
console.log(yujin.hasOwnProperty('sayHello')); // return false - this means yujin function inherited this property.

//Then, why are we using prototype instead of adding sayHello property to each function?
//Because each sayHello property from functions has its own memory locatoin. This is not efficient.


//property shadowing - this is like override in Class
function IdolModel2(name, year){
    this.name=name;
    this.year=year;

    this.sayHello = function(){
        return 'this is example of property shadowing';
    }
}

IdolModel2.prototype.sayHello = function(){
    return 'Hello this is prototype';
}

const yujin2 = new IdolModel2('yujin', 2003);
console.log(yujin2.sayHello());  //due to property shadowing 'property shadowing' is returned.

const ray = new IdolModel('ray',2004);
//getPrototypeOf, setPrototypeOf
Object.setPrototypeOf(RemotePlayback, IdolModel.prototype);

