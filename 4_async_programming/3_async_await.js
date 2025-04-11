//Async - await

const getPromise = (seconds)=> new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('complete');
    },1000);
});


//await can only be used on Promise function. 
async function runner(){
    const result1 = await getPromise(1);
    console.log(result1);
    const result2 = await getPromise(2);
    console.log(result2);
    const result3 = await getPromise(3);
    console.log(result3);
}catch(e){
    console.log(e);
}finally{
    console.log('finally');
}

runner();

