//there are 7 ways to create an object

// 1. Object literal
const obj1 = {
    name:"ath",
    city:"hyd"
};

// 2. object constructor function
function myFunc(name,city){
    this.name = name;
    this.city = city;
}
const obj2 = new myFunc("ath" , "hyd");

// 3. new keyword part of ecma6

const obj3 = new Object();
obj3.name="ath";
obj3.city = "hyd";


// 4.classes
class myclass{
    constructor(name,city){
        this.name=name;
        this.city = city;
    }
}
const obj4 = new myclass("ath","hyd");

// 5. .create method

const obj5 = Object.create(proto);
obj5.name = "ath";
obj5.city = "hyd";

// 6. assign method
const obj5 = {};
 Object.assign(obj5,{name:"ath"},{city:"hyd"});

 //7. factory function

 function myFunc2(name,city){
    return{
        name:name,
        city:city
    };
 }
 const obj7 = myFunc2("ath","hyd");





