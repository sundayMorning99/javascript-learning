//Closure - is the combination of a function and the lexical enfironment within which that function was declared.
//In other words, 


function getNumber(){
    var number =5;

    function innerGatNumber(){
        return number;
    };

    return innerGetNumber();
}

console.log(number); //return error
console.log(getNumber());

//data cashe

function cacheFunction(newNum){
    var number = 10*10;

    return number *newNum;
}

