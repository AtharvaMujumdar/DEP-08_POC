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


//Promise methods

/*1. Promise.all()
The Promise.all() method takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved. If any of the promises reject, it immediately rejects with the reason of the first promise that rejects.
*/

const pro1 =  Promise.resolve("promise-1");
const pro2 =  Promise.resolve("promise-2");
const pro3 =  Promise.reject("reject-1");
const pro4 =  Promise.reject("reject-2");

Promise.all([pro1,pro2]).then((result)=>{
    console.log(result); // this returns all promises if all are resolved
});

/* 2. Promise.any()
 
the promise.any() methid returns resolved if any of the promises resolve. it only looks of first resolved promise. if all the promises are rejected then it is also rejected.
*/

Promise.any([pro1,pro2,pro3]).then((result)=>{
    console.log(result); // this returns a single resolved promise
})

/* 3. Promise.race()

this promise.race() method returns the first ever promise that is settled that resolves or rejects.

*/

Promise.race([pro3,pro2])
.then((result)=>{
    console.log(result); 
})
.catch((error) =>{
    console.log(error); // this gives reject-1 as the firstr ever setteled promise
})


/*
4. Promise.allsettled()  
The Promise.allSettled() method takes an array of promises and returns a single promise that resolves when all of the promises have settled (i.e., either fulfilled or rejected), regardless of their outcome.

*/

Promise.allSettled([pro3,pro2])
.then((result)=>{
    console.log(result); 
})
.catch((error) =>{
    console.log(error);    // this returns the status of all the promises. 
})





const inputArray = ["Jhon","Alice","Bob","Alex","Max"];
const output = {
    J: ["Jhon"],
    A: ["Alice","Alex"],
    B: ["Bob"]
}
const obj ={};
inputArray.forEach((str)=>{
    const char = str[0];
    if(obj[char]===undefined){
        obj[char] = [];
    }
    obj[char].push(str);
})