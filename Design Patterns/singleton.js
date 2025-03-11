/*
 In singleton design pattern, only one instance is created and the global access point of that instance is provided.
 It is useful when we need only one instance for various actions like caching, database operations etc.


*/

// example -1 : onject literal

const singleton = {
   name:"this is singleton object",
   getName(){
      return this.name;
   }
};


// example-2 through classes

class Singleton{
    constructor(){
        if(!Singleton.instance){
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

const obj1 = new Singleton();
const obj2 = new Singleton();
console.log(obj1===obj2); // gives true as only one instance is created.


//example-3 using class and static methods

class Singleton{
    static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const obj4 = Singleton.getInstance();
const obj5 = Singleton.getInstance();
console.log(obj4===obj5); // this return true;
