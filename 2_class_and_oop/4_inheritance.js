//inheritance: set relationship between classes.
class IdolMoel{
    name;
    year;

    constructor(name, year){
        this.name=name;
        this.year=year;
    }
}

class FemaleIdolModel extends IdolMoel{
    dance(){
        return 'female idols dance';
    }
}

class MaleIdolModel extends IdolMoel{
    sing(){
        return 'male idols sing';
    }
}

let yuJin = new FemaleIdolModel('yujin', 2007);
let jiMin = new MaleIdolModel('jimin', 2003);
console.log(juJin.dance()); // returns 'female idols dance'

console.log(yuJin instanceof IdolModel); //return true
console.log(yujin instanceof FemaleIdolModel); // return true
console.log(yuJin instanceof MaleIdolModel); // return false




