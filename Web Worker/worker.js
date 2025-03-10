let i =0;
function output(){
     i++;
     postMessage(i);
     setTimeout(output, 500);
     
}
output();