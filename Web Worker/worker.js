let i =0;
let data;
onmessage= (e) =>{
   data = e.data;
}
function output(){
     i++;
    
     postMessage(`${data} ${i}`);
     setTimeout(output, 500);
     
}
output();