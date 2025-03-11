/*

Publish-Subscribe Pattern in JavaScript
The Publish-Subscribe (Pub-Sub) pattern is used for decoupled communication between components. Instead of direct method calls, publishers (senders) notify subscribers (receivers) when an event occurs.

Think of a YouTube channel:

Publishers (YouTube creators) upload videos.
Subscribers (viewers) get notified when a new video is published.
The creator doesn’t know who the subscribers are, making it loosely coupled.

*/

//example-1

class PubSub{
    constructor(){
        this.subscribers = {};    
    }
    subscriber(event,callback){
         if(!this.subscribers[event]){
            this.subscribers[event] = [];
         }
         this.subscribers[event].push(callback);
    }

    publish(event,data){
        if(this.subscribers[event]){
            this.subscribers[event].forEach(callback => callback(data));  
        }
    }

    unsubscribe(event,callback){
        if(this.subscribers[event]){
            this.subscribers[event] = this.subscribers[event].filter(sub => sub!=callback);
        }
    }

}

function user3(data){
    console.log(`user1 recieved: ${data}`);
}
function user2(data){
    console.log(`user2 recieved: ${data}`);
}

const event1 = new PubSub();
event1.subscriber("news",user3);
event1.subscriber("news",user2);
event1.unsubscribe("news",user2);


event1.publish("news","video released");


