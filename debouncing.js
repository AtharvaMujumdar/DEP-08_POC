/*

It is a technique in which the number of event handler function call is limited. this is mainly useful if the function call does some api fetching. In this technique,  the function is executed after a certain delay. If another function call is made in this deplay, then the timer is reset. 

*/


function debounce(func,limit){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>func.apply(this,args),limit);
    }
}

debounce(()=>console.log("debounced"),3000);


