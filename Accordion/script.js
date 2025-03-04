const arr = [1,2,3,4,5,6];

let isClicked = false;
const button = document.getElementById('accordion-button');

function display(len){
    const contain = document.getElementById('container-2');
        contain.innerHTML = "";
        for(let i=0;i<len;i++){
            
            contain.innerHTML += `<h2>${arr[i]}</h2>`
        }
}

button.addEventListener('click',() =>{
    if(!isClicked){
        isClicked = true;
        button.innerHTML = "View Less";
        display(arr.length)
    }
    else{
        isClicked = false;
        button.innerHTML = "View All";
        
        display(arr.length/2)
    }
   
});

document.addEventListener('DOMContentLoaded' , () =>{
    display(arr.length/2);
})