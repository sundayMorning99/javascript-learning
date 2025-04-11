//Scope

var numberOne = 20;

function levelOne(){
    var numberOne = 40;
    console.log(numberOne);  //return 40. function grabs the closest variable
}


//JS Lexical Scope - declaration location set scope
//Dynamic scope - executing location set scope 

var numberThree = 3;

function functionOne(){
    var numberThree =100;

    functionTwo();
}

function functionTwo(){
    console.log(numberThree);
}

functionOne(); // return 3

//if this is dynamic scope, 100 would be returned. but, DO NOT use var for variable unless it's really necessary


