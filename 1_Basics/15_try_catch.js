function runner(){
    try{
        console.log('Good morning');

        throw new Error('a big problem!');

        console.log('Afternoon');
    }catch(e){
        console.log('--catch--');
        console.log(e); //grab throw
    } finally {
        console.log('finally execute even with an error')  //finally is optional
    }
}

