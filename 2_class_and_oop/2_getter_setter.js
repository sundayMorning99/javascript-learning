class IdolModel {
    name;  //#name is private - name is accessible only by getter.
    year;

    constructor(name, year){
        this.name=name;
        this.year=year;
    }

    //get keyword -> you can use dot method. nameAndYear, not nameAndyear()
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }

    //set keyword 
    set setName(name){
        this.name=name;
    }
}

let yuJin = new IdolModel('yujin', 2003);
yuJin.setName='silly';
console.log(yuJin); // return with 'silly' in name

