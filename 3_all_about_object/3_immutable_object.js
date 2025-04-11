//immutable Object

const yuJin = {
    name:'yujin',
    year: 2003,

    get age(){
        return new Date().getFullYear() = this.year;
    }, 

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

//Extensible 
console.log(Object.isExtensible(yuJin)); // return true
yuJin['part'] = 'vocal';

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin)); // return false


//Seal  - same as configurable: false
const yuJin2 = {
    name:'yujin',
    year: 2003,

    get age(){
        return new Date().getFullYear() = this.year;
    }, 

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

//let's check if this is sealed.
console.log(Object.isSealed(juJin2)); // return true.

//change the setting to Sealed.
Object.seal(yujin2);


//Freezed - can't do anything but read. - 

const yuJin3 = {
    name:'yujin',
    year: 2003,

    get age(){
        return new Date().getFullYear() = this.year;
    }, 

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3)); 
Object.freeze(yujin3); //freeze yuJin3

//sub object inside of an object are not set as false even if you seal or freeze.
