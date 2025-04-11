function IdolModel(name,year){
    //if we forget to use 'new' when creating a object. we can check and re-make - const yujin = IdolModel
    if(!new.target){
        return new IdolModel(name,year);
    }
    this.name=name;
    this.year=year;
    
    this.dance = function(){
        return '${this.name} dances';
    }
}

const yuJin = new IdolModel('yujin', 2003);
console.log(yuJin.dance());  // return 'yujin dances'

