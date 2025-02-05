const indexDB = window.indexedDB;


// const request = indexDB.open("CarsDB",1);

// request.onerror= (e)=>{
//     console.log("there is an error");    // if there is any error, onerror method detects it and the function inside
//     console.log(e);                      // it canconsole log that error.
// }



// request.onupgradeneeded = function() {
//     const db=request.result;
//     const store = db.createObjectStore("cars",{ keyPath: "id"});
//     store.createIndex("colour",["colour"],{unique:false});
//     store.createIndex("colour_and_make",["colour","make"],{unique:false});
// }


// request.onsuccess = function() {
//     const db = request.result;
//     const transaction = db.transaction("cars","readwrite"); //creates a transaction which is a group of operations that must be completed as a whole
//     const store =  transaction.objectStore("cars");
//     const colourIndex = store.index("colour");
//     const colourAndMakeIndex = store.index("colour_and_make");


//     store.put({id:1,colour:"red",make:"toyota"}); //insert data into the database.
//     store.put({id:2,colour:"yellow",make:"hyundai"});
//     store.put({id:3,colour:"blue",make:"mahindra"});
//     store.put({id:4,colour:"black",make:"toyota"});

//     const query1 = store.get(4);
//     const query2 = store.getAll();
//     const query3 = colourIndex.getAll("red");
    

//     query1.onsuccess = ()=>{
//         console.log("query1 ",query1.result);
//     }

//     query2.onsuccess = ()=>{
//         console.log("query2 ",query2.result);
//     }

//     query3.onsuccess = ()=>{
//         console.log("query3 ",query3.result);
//     }
    
//     transaction.oncomplete = ()=>{
//         db.close();
//     }
    
// }

let request = indexedDB.open("myDatabase", 1); // Ensure the version is correct

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    console.log("Upgrading database...");

    if (!db.objectStoreNames.contains("cars")) {
        const store = db.createObjectStore("cars", { keyPath: "id" });
        store.createIndex("colour", "colour", { unique: false });
        store.createIndex("colour_and_make", ["colour", "make"], { unique: false });
    } else {
        console.log("Object store already exists.");
    }
};

request.onsuccess = function(event) {
    const db = event.target.result;
    console.log("Database opened successfully.");

    const transaction = db.transaction("cars", "readwrite");
    const store = transaction.objectStore("cars");

    store.put({ id: 1, colour: "red", make: "toyota" });
    store.put({ id: 2, colour: "yellow", make: "hyundai" });
    store.put({ id: 3, colour: "blue", make: "mahindra" });
    store.put({ id: 4, colour: "black", make: "toyota" });

    const query1 = store.get(4);
    const query2 = store.getAll();
    const query3 = store.index("colour").getAll("red");

    query1.onsuccess = function() {
        console.log("Query 1 result:", query1.result);
    };

    query2.onsuccess = function() {
        console.log("Query 2 result:", query2.result);
    };

    query3.onsuccess = function() {
        console.log("Query 3 result:", query3.result);
    };

    transaction.oncomplete = function() {
        db.close();
        console.log("Transaction completed and database closed.");
    };

    transaction.onerror = function(event) {
        console.error("Transaction error:", event.target.error);
    };
};

request.onerror = function(event) {
    console.error("Database error:", event.target.error);
};


 