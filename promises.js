/*

A promise is an object that represents the state of asynchronous operations.
It consists of 3 phases:
1. pending: it means that promise is not settled
2. resolve: it means the asynchronous function is successful
3. reject: it means the asynchronous function has failed.



*/

//creating new promise by constructor

const promise = new Promise((resolve,reject)=>{
    let success=true;
    if(success===true){
        resolve("operation successful");
    }
    else{
        reject("operation failed");
    }
})

/* to hand the promise once it is settled we use then keyword */

promise.then(
    (result)=>{console.log(result)},
    (error) => {console.log(error)}
);