
//setTimeout is async function.
function longWork(){
    setTimeout(()=>{
        console.log('complete');
    }, 2000);  //execute after 2 seconds.
}

console.log('hello');
longWork();
console.log('world');

//async programming can make thread-working more efficient. 

//JS Engine creates Event Loop which control async functions. if an async function is called, it moves to Event Quene and then moves back to Call Stack by Event Loop. 
