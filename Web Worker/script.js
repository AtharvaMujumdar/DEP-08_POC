let worker;
 function startworker(){
if(typeof(Worker)!=undefined){
    if(worker===undefined){
        worker = new Worker("worker.js");
    }
    worker.postMessage("hello") // sends message to worker.js
    worker.onmessage = (e)=>{
       document.getElementById("output").innerText = e.data;
    }
    
}
else{
    console.log("worker is noit supported");
}
}

function stopworker(){
    if(worker){
       worker.terminate();
       worker = undefined;
    }
}