/*

clousure is a powerful concept in js due to which a function retains the original lexical scope that it was declared in. It means that, if a function func1 is declared or returned by another function main, and there are variables declared in main, then func1 will be abke to access those variables.

this is used to create private variables and methods.

*/

//example-1: private variable

function func1(){
    let count=0; // this is private variable
    return function func2(){
        return ++count;
    }
}
const usecase = func1();
console.log(usecase()); //logs 1
console.log(usecase()); //logs 2
console.log(usecase()); //logs 3

//example-2: private variable and private function

function func2(){
    let count=0; // this is private variable
    function incrementbytwo(){  // this is private function
        count += 2;
        return count;
    }
    return function(){
        return incrementbytwo();
    }
}

const usecase2 = func2();
console.log(usecase2());//logs 2
console.log(usecase2());//logs 4