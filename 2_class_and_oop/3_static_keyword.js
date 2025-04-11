//static

class IdolMoel{
    name;
    year;
    static groupName ='ive';  //link to class not instance

    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    static returnGroupname(){
        return 'ive';
    }
}


//Factory constructor
class IdolMoel{
    name;
    year;

    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    //this is very important concept in OOP.
    static fromObject(obj){
        return new IdolMoel(
            obj.name,
            obj.year,
        );
    }

    static from(list){
        return [list[0], list[1]];
    }
}

let yuJin2 = IdolMoel.fromObject({
    name:'yujin2',
    year:2004,
});

console.log(yuJin2); 

let wonYoung=IdolMoel.fromList(
    [
        'wonyoung',
        2005,
    ]
);

//another static from(list) example
class List {
    static from(list) {
      return [list[0], list[1]];
    }
  }
  
  // Example usage:
  const myList = [1, 2, 3];
  const result = List.from(myList);
  console.log(result); // Output: [1, 2]
