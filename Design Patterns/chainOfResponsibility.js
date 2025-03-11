/*

In chain of responsibility pattern, the handlers i.e. objects handle a request as a chain. If one object cannot handle the request, the request is passed to next object in the chain.


*/

class Handler{
    setNext(handler){
        this.nexthandler = handler;
        return handler;
    }
    handlerequest(request){
        if(this.nexthandler){
            return this.nexthandler.handlerequest(request);
        }
        console.log("cannot be processed");
    }
}


class Level1 extends Handler{
    handlerequest(request){
        if(request==="basic"){
            console.log("handled by level1");
        }
        else{
            console.log("level1 cannot handle this request");
            super.handlerequest(request);
        }
    }
}

class Level2 extends Handler{
    handlerequest(request){
        if(request==="complex"){
            console.log("handled by level2");
        }
        else{
            console.log("level2 cannot handle this request");
            super.handlerequest(request);
        }
    }
}

const level1 = new Level1();
const level2 = new Level2();

level1.setNext(level2);

level1.handlerequest("basic"); // output: handled by level1

level1.handlerequest("complex"); // output: level1 cannot handle this request  \n handled by level2

level1.handlerequest("intermediate"); 
/* output: 
level1 cannot handle this request
level2 cannot handle this request
cannot be processed
*/

