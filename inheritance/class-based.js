class Person{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`Person with name ${ this.name} speaks from parent..`);        
    }
}

class Student extends Person{
    constructor(name, age){
        super(name);
        this.age = age;
    }
    sing(){
        console.log(`${this.name} of age ${this.age} singing from child..`);        
    }
}

let s = new Student('Vivek', 30);
s.sing();
s.speak();
console.log(s);
