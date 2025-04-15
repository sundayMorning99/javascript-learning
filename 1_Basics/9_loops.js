//Loops: a)for and b)while

for (let i=0; i<10; i++){
    for(let j=3; j>0;j--){
        console.log(i, j);
    }
}

//Quiz draw 6 by 6 square using *
let square = '';
let size = 6;

for (let i=0; i<size;i++){
    for(let j=0;j<size;j++){
        square +='*';
    }
    square +='\n'; //this will break line for every 6 *s.
}   

//Loop with Dictionary
const yuJin = {
    name: 'Yujin',
    year: 2003,
    group: 'ive',
}

for (let key in yuJin){
    console.log(key);  // return name, year, group
}

//Loop with array
const iveMemberArray = ['yujin', 'andrew', 'eliana'];

for (let key in iveMemberArray){
    console.log(key);
    console.log(`${key}:${iveMemberArray[key]}`);
}

//while
let number = 0;
while (number<10){
    number ++;
}

//do-while
//Difference between while and do-while is do-while execute first interation before checking the condition. 
do {
    number ++;
} while(number<10);


//break

for (let i=0;i<10;i++){
    if (i===5){
        break;
    }
    console.log(i);
}
