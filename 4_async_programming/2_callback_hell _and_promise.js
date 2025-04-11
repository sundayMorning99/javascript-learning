//callback

function waitAndRun() {
    setTimeout(() => {
        console.log('end');
    }, 2000);
}

waitAndRun();

function waitAndRun2() {
    setTimeout(
        () =>{
            console.log('1st callback end');

            setTimeout(() => {
                console.log('2nd callback end');
                setTimeout(() => {
                    console.log('3rd callback end');
                }, 2000);
            }, 2000);
        }, 2000);
}


//promise - resolve (passing argument to then())

const timeoutPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve('complete');
    }, 2000);
});

timeoutPromise.then((res)=>{
    console.log(res);
})


const getPromise = (seconds) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('complete');
    },seconds*1000);
});

getPromise(3)
.then((res)=>{
    console.log(res);

    return getPromise(1);
}).then((res)=>{
    console.log(res);
}).then((res)=>{
    console.log(res);
});

//promise - reject
const getPromise = (seconds) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('error');
    },seconds*1000);
});

getPromise(3)
    .then((res)=>{
        console.log(res);
    })
    .catch(()=>{
        console.log('first catch');
    })
    .finally(()=>{
        console.log('finally execute anyway');
    });

//resolove calls .then & reject calls .catch.


//multiple Promises

Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then((res)=>{
    console.log(res);
});  //this takes only 4 seconds, not 6. 


