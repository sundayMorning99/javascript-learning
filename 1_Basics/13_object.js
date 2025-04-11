let yuJin = {
    name: 'anyuJin',
    group: 'ive',
    dance: function(){return '${this.name} dances';}
}

console.log(yuJin.name); //returns 'anyuJin'
console.log(yuJin.dance()); // () is required to execute a function

yuJin['group'] = 'codeFactory' // group : 'codeFactory'

yuJin['language']='korean'; //what if you enter non-existing key:value? it creates a new key:value in dictionary.
delete yuJin['language']; //delete language : 'korean' together

//const object
const wonYoung = {
    name:'jang wonyoung',
    group:'ive',
}

wonYoung['name'] = 'wonyoung'; // with with 'const' you can still change the value 
wonYoung ={}; // ERROR!!!!  But, you can't change the property or method inside of an object.

//return all keys or values
console.log(Object.keys(wonYoung));
console.log(Object.values(wonYoung));

let name = 'jackson';

const yuJin2 ={
    name, 
}  // this is same as nane: 'jackson' 