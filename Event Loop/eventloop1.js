/*
the event loop is a concept in js through which we can run asynchronous functions in js even though js is sigle threaded. in this, call stack, callback queue or macrotask queue and micro task queue are checked continuosly by the js engine. 


all synchronous functions and expressions are put into callstack and are executed first. 
the callback functions of promises are put in the micro task queue
the call functions of all other functions are put into macrotask or callback queue.

if the call stack is empty, then the event loop checks microtask queue and shifts first function from it to callstack for its execution
if the microtask queue is empty then the event loop checks macrotask/callback queue and shifts the functions from it to callstack for its execution


*/


//Example-1 

console.log("start");

setTimeout(()=>{
    console.log("setTimeout callback");
},1000);

Promise.resolve()
.then(()=>{
    console.log("promise-1");
})
.then(()=>{
    console.log("promise-2");
})

console.log("end");

/*
Output is 
start
end
promise-1
promise-2
settimeout callback

*/


//example-2

console.log("start");

setTimeout(()=>{
    console.log("settimeout callback-1");
},1000);

const prom = new Promise((resolve, reject) => {
    resolve(); 
});


prom.then(()=>{
    console.log("promise-1");

    setTimeout(()=>{
        console.log("nested settimeout");
    },1000);

    Promise.resolve().then(()=>{
        console.log("nested promise");
    });
})

console.log("end");


/*
output

start
end
promise-1
nested promise
settimeout callback-1 after 1 sec
nested settimeout      after 1 sec

*/


//Example-3

/*

setImmediate () is executed after micro task queue but before macrotask/ call back queue.

*/

console.log("start");

const prom3 = new Promise((resolve,reject)=>resolve());

function give(){
    return ()=>console.log("function");
}

setTimeout(()=>console.log("setimeout-1"),1000);

prom3.then(()=>{
    console.log("promise-1");
})

setImmediate(()=>{
    console.log("set immediate");
})

console.log("end");

/*

output is 
start
end
promise-1
set immediate
setimeout-1   after1 sec

*/



