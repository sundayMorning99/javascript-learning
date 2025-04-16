//super and override

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name=name;
        this.year=year;
    }

    sayhello(){
        return 'hello this is ${name}';
    }
}

class FemaleIdolModel extends IdolModel{
    part;

    //override the inherited class
    constructor(name, year, part){
        super(name, year); //bring constructor from parent class, IdolModel
        this.part=part;
    }

    //${super,name} would set undefined in Javascript.
    sayHello(){
        return `hello ${this.name}. ${this.part} is my part.`;
    }
}

let yuJin = new FemeleIdolModel('yujin', 2003, 'vocal');
