// CASE-1
function show(){
    console.log(this);
}

show(); // in browser this will log the global object, but in node this will log {}.

// CASE-2
const obj = {
    name:"ath",
    myfunc : function (){
        console.log(this.name);
    }
};
obj.myfunc(); // this will log ath
myfunc(); // this will log undefined as name is not defined in global object


// CASE-3
const obj2 = {
    name:"ath",
    myfunc : setTimeout(function(){console.log(this)},2000),
    
};

obj2.myfunc(); // this gives global execution object as this inside the function takes reference of settimeout which points to window object
/* if settimeput is inside a function then it will log obj4. */

// CASE-4
const obj4 = {
    name:"ath",
    myfunc : setTimeout(()=>console.log(this),2000),
    
};

obj2.myfunc(); // this will log global object as in arrow function, this points to the parent in which it is defined and in this case the parent is obj4

// CASE-5

const arr = [10,20,30];
arr.forEach(function(){
    console.log(this);    // outputs global object as function point to it.
})


// CASE-6

const arr1 = [10,20,30];
arr.forEach(()=>console.log(this));    // outputs global object as function point to it.


// CASE-7
const obj7 = {
    name:"ath",
    myfunc : function(){
        console.log(this);  // this will log obj7
        function show(){
            console.log(this); // this will log global object
        }
        show();
    },
    
};
obj7.myfunc();

/*
3 rules for this:

1. depends on who is calling. if object is calling then inside function this refers to that object else this refers to global object

2. arrow function do not have their own this. they take it from their parent in which they are defined.

3. this can be explicitly set using call(), bind() and apply()


When using event handlers in the DOM, this refers to the element that received the event.

*/




