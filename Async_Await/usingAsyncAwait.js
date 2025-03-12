async function fetchData(){
    try{
        const response = await fetch("./data.json");
        const data = await response.json();
        const sec = document.getElementById("data");
        sec.innerHTML = '';
        data.forEach((obj)=>{
            sec.innerHTML += `<h1>${obj.id}</h1>`;
        })
    }
    catch{
        console.log("there was some error");
    }
}

fetchData();