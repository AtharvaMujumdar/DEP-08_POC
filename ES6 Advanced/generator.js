/*
 Generator is a special function that can be paused and resumed. It can be used to create iterators.
 yield returns an object that contains a value and done property.
 done represents if the generator has finished iterating.

 Generator are used to create iterators of objects. Normally with objects we cannot use for of loop 
 but with custom generator we can use for off loop;



*/

//basic generator
function* gen1(){
    yield 1;
    yield 2;
    yield 3;
}
const obj1 = gen1();
console.log(obj1.next()); //output: 1


//custom iterator case-1

const countInfo = {
    arr:[1,2,3,4],
    [Symbol.iterator] : function(){
        let i =0;
        return {
            next(){
                if(i<3){
                    return {value:this.arr[i++],done:false};
                }
                else{
                    return {value:"finished",done:true};
                }
            }
        }
       
    
    }
}


for(i of countInfo){
    console.log(i); // it will give error as this points to the iterator and not to the object
}

//custom iterator case-2


const countInfo2 = {
    arr: [1,2,3,4],
    [Symbol.iterator] : function(){
        let i =0;
        const array = this.arr;
        return {
            next(){
                if(i<array.length){
                    return {value:array[i++],done:false};
                }
                else{
                    return {value:"finished",done:true};
                }
            }
        }
       
    
    }
}


for(i of countInfo2){
    console.log(i);  // it will output 1 2 3 4 
}

//custom iterator case-3

const countInfo3 = {
    a:1,
    b:2,
    c:3,
    *[Symbol.iterator](){
        for(let i in this) yield i;
    }
}

for(item of countInfo3){
    console.log(item);
}
