/**
 * Property Attribute
 * 
 * 1) data property - key & value (actual values)
 * 2)Accessor property - access property (getter and setter)
 */

let yuJin = {
    name:'yujin',
    year:2003,
}

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name')); // Object. means calling static function.

/**
{
    value: 'yujin',
    writable: true,
    enumerable: true,
    configurable: true
  }

writable - can we change the value?  false - you can't
enumerable - can we line up? - can we use for... in statement? 
configurable - can we re-define property attribute
*/

console.log(Object.getOwnPropertyDescriptors(yuJin));  //notice that Decriptors this will return attributes for each property.


let yuJin2={
    name:'eliana',
    year:2016,

    get age(){
        return new Date().getFullYear()-this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

yuJin2['height'] =170;   // adding a new property - this will set all 3 attributes as true.

//change property attribute
Object.defineProperty(juJin2, 'name', {
    value : 172,
    writable: true, 
    enumerable: true, 
    configurable: true,
})

