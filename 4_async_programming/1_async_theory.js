//Async theory


//This is an example of sync programming.
function longWork(){
    const now=new Date()

    const milliseconds = new.getTime();
    const afterTwoSeconds = milliseconds + 2*1000;

    while(new Date().getTime() < afterTwoSeconds){

    }

    console.log('complete');
}

console.log('hello')
