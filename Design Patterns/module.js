/*
  Module design pattern is used to create encapsulated modules that support private variables. It helps to prevent global scope pollution
*/

//example-1: basic module pattern with the help of Immediately Invoked Function Expression

const Person = (function(){
    let name = "Alice"; // private variable
    function getName(){
        return name; // private function
    }

    return {
        getNameOutput: function(){
            return getName();
        }
    }
})();

console.log(Person.getNameOutput()); // gives Alice
console.log(Person.name); // logs undefined


// we can use export and import for objects as well.
/*
Yes, in the Module Pattern, we return only one object. This makes it behave like a Singleton, where only one instance exists throughout the application.

*/