document.querySelector('#grandparent').addEventListener('click',() =>{
    console.log("grandparent clicked");
},true);

document.querySelector('#parent').addEventListener('click',(event) =>{
    console.log("parent clicked");
    
},false);

document.querySelector('#child').addEventListener('click',(event) =>{
    console.log("child clicked");
    
},true);


/* 
 for capturing or trickling the value of use capture is true.

 to stop this we use event.stopPropagation();

 if we stop only in child then output is grandparent -> parent -> child
 if we stop only in parent then output is grandparent -> parent 

*/


/*

if we use true and false both then the ouput is according to bubbling or capturing as then 
bubbling or capturing will occur in a loop

for example if i put false in parent and true in other two, then only parent is using bubbling.
now, if i click on child then output is grandparent -> child -> parent 
expalnation:
due to capturing/trickling when i click on child , first grandparent is executed . then it sees that
parent is bubbling so child is executed as child is also capturing. then bubbling cycle starts . as 
child was triggered, now parent is also executed.


*/