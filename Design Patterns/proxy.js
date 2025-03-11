/*
Proxy design pattern is used to give a proxy/placeholder/substitute to an object. It is done to give control access, add logging/validation before access to reql object
*/

//example-1: Basic Proxy
const user = {
    name:"Alice",
    age:30
};

const userProxy = new Proxy(user,{
    get(target,property){
        console.log(`${property} accessed`);
        return target[property];
    },
    set(target,property,value){
        console.log(`${property} changed`);
        target[property] = value;
        return true; //while setting property always return true;
    }
});


console.log(userProxy.name);
userProxy.age = 25;
console.log(userProxy.age);

/* output

name accessed
Alice
age changed
age accessed
25


*/


//example-2: Porxy for validation

const user1 = {
    name:"Bob",
    age:22,
};

const userProxy1 = new Proxy(user1,{
    set(target,property,value){
        if(property ==="age" && typeof(value)!="number"){
            throw new Error("Age must be a number");
        }
        else if(property==="name" && typeof(value)!="string"){
            throw new Error("Name must be a string");
        }
        else{
            target[property] = value;
            return true; 
        }
    }
})

userProxy1.age = "asd"; // output is an error
//the above example shows that proxy can be used for validating the changed value


//example-3: Proxy for caching

function slowFunction(num) {
    console.log("Computing...");
    return num * num;
}

const cache = new Proxy({}, {
    get(target, key) {
        if (!(key in target)) {
            target[key] = slowFunction(Number(key));
        }
        return target[key];
    }
});

console.log(cache[5]); // Logs: Computing... → Output: 25
console.log(cache[5]); // Output: 25 (without "Computing...")


//example-4: Proxy for logging

const api = {
    fetchData() {
        return "Data from API";
    }
};

const apiProxy = new Proxy(api, {
    apply(target, thisArg, args) {
        console.log(`Method ${target.name} called with args:`, args);
        return target.apply(thisArg, args);
    }
});

console.log(apiProxy.fetchData()); // Logs method call before execution

