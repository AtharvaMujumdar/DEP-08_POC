import API_KEY from './key.js';
//hamburger icon for mobile
document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});


const models = { new: {}, used: {} };


async function fetchformdetails(){
    try{
        const response = await fetch("./Data/type.json");
        const data = await response.json();
        const cars = data.carsInfo;
        cars.forEach(car =>{
            const type = car.category==="new" || car.category === "instock" ? "new" : "used";
            const brand = car.company.toLowerCase();
            if (!models[type][brand]) {
                models[type][brand] = [];
            }

            models[type][brand].push(car.name);
        })
    }
    catch{
        console.log("some error fetching the data");
    }
}




let currentCondition = 'new';

function setCondition(condition) {
    currentCondition = condition;
    document.getElementById("newBtn").classList.toggle("bg-black", condition === "new");
    document.getElementById("newBtn").classList.toggle("text-white", condition === "new");
    document.getElementById("usedBtn").classList.toggle("bg-black", condition === "used");
    document.getElementById("usedBtn").classList.toggle("text-white", condition === "used");
    updateModels();
}

function updateModels() {
    const make = document.getElementById("make").value;
    const modelSelect = document.getElementById("model");
    modelSelect.innerHTML = "";
    
    if(models[currentCondition][make]){
        models[currentCondition][make].forEach(model => {
            const option = document.createElement("option");
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
    
}




function sign_in_form() {
    document.getElementById("signin").classList.remove("hidden");
}

function closesignin() {
    document.getElementById("signin").classList.add("hidden");
}

//show partial car types
function fetchBrowseTypeDataPartial() {
    fetch("./Data/type.json")
        .then(response => response.json())
        .then(data => {
            const browsetype = document.getElementById("browse_by_type");
            browsetype.innerHTML = ""; // Clear previous content
            const types = data.cars.slice(0, 4);
            types.forEach(type => {
                const item = document.createElement("section");
                item.classList.add("type");
                const img = document.createElement("img");
                img.setAttribute("alt", "car");
                img.src = type.image;
                const name = document.createElement("h3");
                name.textContent = type.name;
                item.appendChild(img);
                item.appendChild(name);
                browsetype.appendChild(item);
            });
        });
}

//show all car types 
function fetchBrowseTypeDataFull() {
    fetch("./Data/type.json")
        .then(response => response.json())
        .then(data => {
            const browsetype = document.getElementById("browse_by_type");
            browsetype.innerHTML = ""; // Clear previous content
            data.cars.forEach(type => {
                const item = document.createElement("section");
                item.classList.add("type");
                
                const img = document.createElement("img");
                img.src = type.image;
                img.setAttribute("alt", "car");
                const name = document.createElement("h3");
                name.textContent = type.name;
                item.appendChild(img);
                item.appendChild(name);
                browsetype.appendChild(item);
            });
        });
}

//show partial brand name and logo
function fetchBrandsPartial() {
    fetch("./Data/type.json")
        .then(response => response.json())
        .then(data => {
            const browsetype = document.getElementById("explore_brands");
            browsetype.innerHTML = ""; // Clear previous content
            const brands = data.brands.slice(0, 5);
            brands.forEach(type => {
                const item = document.createElement("section");
                item.classList.add("type");
                const img = document.createElement("img");
                img.setAttribute("alt", type.brand_name);
                img.src = type.image;
                const name = document.createElement("h3");
                name.textContent = type.brand_name;
                item.appendChild(img);
                item.appendChild(name);
                browsetype.appendChild(item);
            });
        });
}

//show all brand name and logo
function fetchBrandsFull() {
    fetch("./Data/type.json")
        .then(response => response.json())
        .then(data => {
            const browsetype = document.getElementById("explore_brands");
            browsetype.innerHTML = ""; // Clear previous content

            data.brands.forEach(type => {
                const item = document.createElement("section");
                item.classList.add("type");
                const img = document.createElement("img");
                img.setAttribute("alt", type.brand_name);
                img.src = type.image;
                const name = document.createElement("h3");
                name.textContent = type.brand_name;
                item.appendChild(img);
                item.appendChild(name);
                browsetype.appendChild(item);
            });
        });
}


// slider for reviews
let currentIndex = 0;
let reviewsData = [];

function fetchReviews() {
    fetch("./Data/type.json")
        .then(response => response.json())
        .then(data => {
            reviewsData = data.reviews;
            displayReviews(currentIndex);
        })
        .catch(error => console.error('Error fetching reviews:', error));
}

function displayReviews(startIndex) {
    const reviews = document.getElementById("reviews");
    reviews.innerHTML = ""; // Clear previous content

    for (let i = startIndex; i < startIndex + 3; i++) {
        const index = i % reviewsData.length;
        const review = reviewsData[index];
        const reviewCard = `
             <section class="flex flex-col bg-white text-black p-4 sm:p-6 m-4 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
    <div class="flex flex-row justify-between items-center mb-4">
        <h3 class="text-lg sm:text-xl font-bold leading-tight">${review.title}</h3>
        <img src="./Images/inverted_comma.png" alt="Quote" class="w-5 sm:w-6" >
    </div>
    <p class="text-sm sm:text-base leading-relaxed">${review.review}</p>
    <div class="flex flex-row mt-4 items-center">
        <img src="${review.image}" alt="Profile Image" class="w-10 sm:w-12 h-10 sm:h-12 rounded-full mr-3 sm:mr-4" >
        <div class="flex flex-col">
            <h3 class="font-semibold text-sm sm:text-base">${review.name}</h3>
            <p class="text-xs sm:text-sm text-gray-600">${review.designation}</p>
        </div>
    </div>
</section>

        `;
        reviews.innerHTML += reviewCard;
    }
}

document.getElementById("prevButton").addEventListener("click", () => {
    currentIndex = (currentIndex - 3 + reviewsData.length) % reviewsData.length;
    displayReviews(currentIndex);
});

document.getElementById("nextButton").addEventListener("click", () => {
    currentIndex = (currentIndex + 3) % reviewsData.length;
    displayReviews(currentIndex);
});



//blogs partial rendering

function fetchBlogsPartial() {
    fetch("./Data/type.json")
        .then(response => response.json())
        .then(data => {
            const blogpost = document.getElementById("latest_blog_post");
            blogpost.innerHTML = ""; // Clear previous content
            const blogs = data.blogs.slice(0, 3);
            blogs.forEach(blog => {
                const blogcard = `
            <section class="transition-transform duration-300 hover:-translate-y-5 flex flex-col gap-2">
                <img src="${blog.image}" alt="alttext">
                <div class="flex flex-row gap-7">
                <p>${blog.role}</p>
                <p class="text-gray-500">&#8226;</p>
                <p>${blog.date}</p>
                </div>
                <p class="font-bold">${blog.blog}</p>
             </section>
        `;
                blogpost.innerHTML += blogcard;
            });
        });

}

//blogs full rendering
function fetchBlogsFull() {
    fetch("./Data/type.json")
        .then(response => response.json())
        .then(data => {
            const blogpost = document.getElementById("latest_blog_post");
            blogpost.innerHTML = ""; // Clear previous content

            data.blogs.forEach(blog => {
                const blogcard = `
            <section class="transition-transform duration-300 hover:-translate-y-5 flex flex-col gap-2">
                <img src="${blog.image}" alt="alttext">
                <div class="flex flex-row gap-7">
                <p>${blog.role}</p>
                <p class="text-gray-500">&#8226;</p>
                <p>${blog.date}</p>
                </div>
                <p class="font-bold">${blog.blog}</p>
             </section>
        `;
                blogpost.innerHTML += blogcard;
            });
        });
}

//recently added partial rendering
function fetchRecentlyAddedPartial() {
    fetch("./Data/type.json")
        .then(response => response.json())
        .then(data => {
            const recentlyadded = document.getElementById("recently_added");
            recentlyadded.innerHTML = ""; // Clear previous content
            const recent = data.carsInfo.filter((car) => car.category === "new").slice(0, 3);
            recent.forEach(car => {
                const carcard = `
              <section class="transition-transform duration-300 hover:-translate-y-5 flex flex-col rounded-xl gap-7">
                <img class="rounded-t-xl" src="${car.image}" alt="alttext">
                <div class="pl-5 pr-5">
                <div class="flex flex-row font-bold">
                    <p>${car.name} - </p>
                    <p> ${car.year}</p>
                </div>
                <div class="flex flex-row gap-3 ">
                    <p>${car.mileage}</p>
                    <p class="text-gray-500">&#8226;</p>
                    <p>${car.fuel}</p>
                    <p class="text-gray-500">&#8226;</p>
                    <p>${car.mode}</p>
                </div>
                <h3 class="mt-3 mb-3 font-bold text-xl">${car.price}</h3>
                <button class="flex flex-row text-blue-700" title="button"><span>View Details</span> <img class="w-5 h-5" src="./Images/arrow-right-up-line.png" alt="alttext"></button>
                 </div>
                </section>
        `;
                recentlyadded.innerHTML += carcard;
            });
        });
}

//recently added full rendering
function fetchRecentlyAddedFull() {


    fetch("./Data/type.json")
        .then(response => response.json())
        .then(data => {
            const recentlyadded = document.getElementById("recently_added");
            recentlyadded.innerHTML = ""; // Clear previous content
            const recent = data.carsInfo.filter((car) => car.category === "new");
            recent.forEach(car => {
                const carcard = `
              <section class="transition-transform duration-300 hover:-translate-y-5 flex flex-col rounded-xl gap-7">
                <img class="rounded-t-xl" src="${car.image}" alt="alttext">
                <div class="pl-5 pr-5">
                <div class="flex flex-row font-bold">
                    <p>${car.name} - </p>
                    <p> ${car.year}</p>
                </div>
                <div class="flex flex-row gap-3 ">
                    <p>${car.mileage}</p>
                    <p class="text-gray-500">&#8226;</p>
                    <p>${car.fuel}</p>
                    <p class="text-gray-500">&#8226;</p>
                    <p>${car.mode}</p>
                </div>
                <h3 class="mt-3 mb-3 font-bold text-xl">${car.price}</h3>
                <button class="flex flex-row text-blue-700" title="button"><span>View Details</span> <img class="w-5 h-5" src="./Images/arrow-right-up-line.png" alt="alttext"></button>
                 </div>
                </section>
        `;
                recentlyadded.innerHTML += carcard;
            });
        });

}

// Featured list display

function displayCars(cate) {

    fetch("./Data/type.json")
        .then(response => response.json())
        .then(data => {
            const featured = document.getElementById("featured_list");
            featured.innerHTML = ""; // Clear previous content
            let cars;
            if (cate === "") { cars = data.carsInfo; }
            else { cars = data.carsInfo.filter((car) => car.category === cate); }
            cars.forEach(car => {
                const carcard = `
              <section class="transition-transform duration-300 hover:-translate-y-5 flex flex-col rounded-xl gap-7">
                <img class="rounded-t-xl" src="${car.image}" alt="alttext">
                <div class="pl-5 pr-5">
                <div class="flex flex-row font-bold">
                    <p>${car.name} - </p>
                    <p> ${car.year}</p>
                </div>
                <div class="flex flex-row gap-3 ">
                    <p>${car.mileage}</p>
                    <p class="text-gray-500">&#8226;</p>
                    <p>${car.fuel}</p>
                    <p class="text-gray-500">&#8226;</p>
                    <p>${car.mode}</p>
                </div>
                <h3 class="mt-3 mb-3 font-bold text-xl">${car.price}</h3>
                <button class="flex flex-row text-blue-700 view-details-btn" title="button"><span>View Details</span> <img class="w-5 h-5" src="./Images/arrow-right-up-line.png" alt="alttext"></button>
                 </div>
                </section>
        `;
                featured.innerHTML += carcard;

                
                 
            });
        });


}

//function to handle onclick of search cars form in header
function searchCars(e){
    e.preventDefault();
    const company = document.getElementById("make").value.trim();
    const name = document.getElementById("model").value.trim();
    console.log(company + " " + name);
    

    fetch("./Data/type.json")
        .then(response => response.json())
        .then(data => {
           
            
            data.carsInfo.forEach(car => {
                if(car.company.toLowerCase() === company && car.name === name){
                    const parent = document.getElementById("carcard");
                    const carcard = `
                    <section class="flex flex-col rounded-xl gap-7">
                      <img class="rounded-t-xl" src="${car.image}" alt="alttext">
                      <div class="pl-5 pr-5">
                      <div class="flex flex-row font-bold">
                          <p>${car.name} - </p>
                          <p> ${car.year}</p>
                      </div>
                      <div class="flex flex-row gap-3 ">
                          <p>${car.mileage}</p>
                          <p class="text-gray-500">&#8226;</p>
                          <p>${car.fuel}</p>
                          <p class="text-gray-500">&#8226;</p>
                          <p>${car.mode}</p>
                      </div>
                      <h3 class="mt-3 mb-3 font-bold text-xl">${car.price}</h3>
                      
                       </div>
                       <button onclick="closeSearchCard()"
                class="w-full bg-red-500 text-white py-2 mt-2 rounded-lg hover:bg-red-600">Close</button>
                      </section>
                        `;
                      parent.innerHTML = carcard;
                      parent.classList.remove("hidden");
                }
                
            });
        });


}

//rendering
document.addEventListener("DOMContentLoaded", function () {
    fetchformdetails();
    fetchBrowseTypeDataPartial();
    fetchBrandsPartial();
    fetchReviews();
    fetchBlogsPartial();
    fetchRecentlyAddedPartial();
    displayCars("instock");
});

//view all, show less functionality

let isclicked = false;
function viewall() {
    const button = document.getElementById("typebutton");
    if (!isclicked) {
        isclicked = true;
        button.textContent = "View Less";
        fetchBrowseTypeDataFull();
    } else {
        isclicked = false;
        button.innerHTML = `<span>View All</span> <img class="w-5 h-5" src="./Images/arrow-right-up-line.png" alt="alttext">`;
        fetchBrowseTypeDataPartial();
    }
}

let isclicked2 = false;
function viewall2() {
    const button = document.getElementById("typebutton2");
    if (!isclicked2) {
        isclicked2 = true;
        button.textContent = "View Less";
        fetchBrandsFull();
    } else {
        isclicked2 = false;
        button.innerHTML = `<span>View All</span> <img class="w-5 h-5" src="./Images/arrow-right-up-line.png" alt="alttext">`;
        fetchBrandsPartial();
    }
}

let isclicked3 = false;
function viewall3() {
    const button = document.getElementById("blogbutton");
    if (!isclicked) {
        isclicked = true;
        button.textContent = "View Less";
        fetchBlogsFull();

    } else {
        isclicked = false;
        button.innerHTML = `<span>View All</span> <img class="w-5 h-5" src="./Images/arrow-right-up-line.png" alt="alttext">`;
        fetchBlogsPartial();
    }
}

let isclicked4 = false;
function viewall4() {
    const button = document.getElementById("recentlyaddedbutton");
    if (!isclicked) {
        isclicked = true;
        button.textContent = "View Less";
        fetchRecentlyAddedFull();
    } else {
        isclicked = false;
        button.innerHTML = `<span>View All</span> <img class="w-5 h-5" src="./Images/arrow-right-up-line.png" alt="alttext">`;
        fetchRecentlyAddedPartial();
    }
}

let isclicked5 = false;
function viewall5() {
    const button = document.getElementById("featuredlistbutton");
    if (!isclicked) {
        isclicked = true;
        button.textContent = "View Less";
        displayCars("");
    } else {
        isclicked = false;
        button.innerHTML = `<span>View All</span> <img class="w-5 h-5" src="./Images/arrow-right-up-line.png" alt="alttext">`;
        displayCars("instock");
    }
}



document.getElementById("instockbutton").addEventListener('click', () => displayCars("instock"));
document.getElementById("newbutton").addEventListener('click', () => displayCars("new"));
document.getElementById("oldbutton").addEventListener('click', () => displayCars("old"));
document.getElementById('carSearchForm').addEventListener('click', searchCars);


function closeSearchCard(){
    document.getElementById("carcard").classList.add("hidden");
}


//Bot 

async function fetchBotResponse(input) {
    
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;
  
    const requestBody = {
      contents: [
        {
          parts: [
            { text: input }
          ]
        }
      ]
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
  
      const data = await response.json();
      console.log(data)
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error:', error);
      return 'There was an error processing your request.';
    }
  }
  

document.getElementById("askBotBtn").addEventListener("click", function () {
    document.getElementById("chatbot").classList.toggle("hidden");
});

document.getElementById("sendBtn").addEventListener("click", async function () {

    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    
    if (message) {
        const chatWindow = document.getElementById("chatWindow");
        const userMessage = `<section class='text-right text-white mb-2 p-2 bg-blue-800 w-auto rounded-xl'>${message}</section>`;
        chatWindow.innerHTML += userMessage;
        chatWindow.scrollTop = chatWindow.scrollHeight;

        const response = await fetchBotResponse(message);
        const responseMessage = `<section class='text-left text-white p-2 bg-gray-600 mb-2 rounded-xl'>${response}</section>`;
        
        chatWindow.innerHTML += responseMessage;
        
        input.value = "";
    }
});





