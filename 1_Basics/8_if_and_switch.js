let number = 5;

if (number % 2 ===0){
    console.log('number is an even number');
} else {
    console.log('number is an odd number');
}


if (number %2 ===0){
    console.log('mu ltiple of 2');
} else if (number % 3 ===0){
    console.log('multiple of 3');
} else {
    console.log(' not multiple of 2 or 3');
}

const englishday = 'monday';

let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay='Monday';
        break;
    case 'tuesday':
        koreanDay='Tuesday';
        break;
    case 'wednesday':
        koreanDay ='Wednesday';
        break;
    default:
        koreanDay ='Great days';
}  //a) make sure to add 'break;' to every case & b) 'default:' grabs all other cases like 'else' in if-else statement.
