/** copy by value  & copy by reference 
 * 1) primitive - copy by value
 * 2) object - copy by refernce
*/

let name = 'eliana';
let name +='silly';  //this is copy by value

let originalObj = {
    name: 'eliana',
    group: 'ive',
}
let cloneObj = originalObj;

originalObj['group'] = 'codeFactory';  //this also change cloneObj into group:'codeFactory' - copy by reference



