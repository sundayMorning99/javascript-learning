//Class

class IdolMode{
    name;  //Unlike Java, Javascript allows skipping this name; and years; But, it's always good practice to write them. 
    year;

    constructor(name, year){
        this.name=name;
        this.year=year;
    }

    //method - action
    sayName(){
        return `hello my name is ${name} .`;
    }
}

let yuJin = new IdolMode('yujin', 2003); //you can create as many member profile instance form class.
console.log(yuJin.name); //return 'yujin' - you can access with dot method.
console.log(yuJin.year);
console.log(yuJin.sayName());



