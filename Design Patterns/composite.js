/*
Composite design patterns is used to treat an individual object and group of objects uniformly. It is mainly used in tree structure, file components and UI components.

*/

//example-1: File systems

class FileSystem{
    constructor(name){
        this.name = name;
    }
    getsize(){
        throw new Error("should be implemented in subclass");
    }
}

class File extends FileSystem{
    constructor(name,size){
        super(name);
        this.size = size;
    }
    getsize(){
        return this.size;
    }
}

class Folder extends FileSystem{
    constructor(name){
        super(name);
        this.items = [];
    }
    add(item){
        this.items.push(item);
    }
    getsize(){
        return this.items.reduce((total,item) =>total + item.getsize(),0 );
    }
}

const file1 = new File("file1",100);
const file2 = new File("file2",200);

const folder = new Folder("folder");
folder.add(file1);
folder.add(file2);
console.log(folder.getsize()); //logs 300
// in the above example, folder class is treated same as file class as both can return getsize();



