document.addEventListener('DOMContentLoaded', function() {
    
  });

const but = document.getElementById('start');
but.addEventListener('click',handleClick);

function handleClick(){
    const progressBar = document.getElementById('progress-bar');
    const w = document.getElementById('width');
    const contain = document.getElementById('container');
    let width = 1;
    const interval = setInterval(() => {
      if (width <= 100) { 
        progressBar.style.width = width + '%';
          contain.style.backgroundColor = 'blue';
        w.innerHTML = width + '%'; 
        width++;
      } else {
        clearInterval(interval); 
      }
    }, 1000);
} 