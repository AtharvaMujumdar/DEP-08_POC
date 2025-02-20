class Person{
    name = "ath";
    age = "x";
}
const obj = new Person();

// call method
function show(){
    console.log(this.name + " " +this.age);
}

show.call(obj); // log ath x


function show1(state,city){
    console.log(this.name + " " + this.age + " " + city + " " + state);
}

show1.call(obj,"mh","mum"); // logs ath x mh mum



// apply method
// same as call but the arguments are passed as an array

function show3(state,city){
    console.log(this.name + " " + this.age + " " + city + " " + state);
}
show3.apply(obj,["mh","mum"]);  // logs ath x mh mum


// bind method
// returns another function that has been binded to an object of a class 

const person  ={
    name:"ggg",
    age : 15,
};

function show4(city,state){
    console.log(this.name + " " + this.age + " " +  city +  " " + state);
}

const newshow4 = show4.bind(person,"mum","mh");
// newshow4(); // logs ggg 15  this is before giving arguments
newshow4(); // logs ggg 15 mum mh


