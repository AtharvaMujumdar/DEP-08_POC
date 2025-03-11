/*
this is used when an object (Subject) needs to notify multiple other dependent objects (observers)  whenever its state changes
*/


// Subject (Observable)
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

// Observer
class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received update: ${data}`);
    }
}

// Usage
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("New data available!");

// Unsubscribing an observer
subject.unsubscribe(observer1);

subject.notify("Another update!"); 


/*

Use Observer Pattern when multiple objects need to react to a state change.
Use EventEmitter (Node.js) for better event handling.
Use DOM Events (Frontend) for UI interactions.

*/