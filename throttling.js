/*

It is a technique which is also used to optimize the number of function calls, but this technique insures that the function call is made atleast once in a time range.

*/


function throttle(func,limit){
    let last =0 ;
    return function (...args){
        let now = Date.now();
        if(now - last >= limit){
             last = now;
             func.apply(this,args);
        }
    }
}

throttle(()=>console.log("throttle"),3000);