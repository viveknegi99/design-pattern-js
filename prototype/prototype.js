class Person{
    constructor(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
}

class PersonPrototype{
    constructor(per){
        this.per = per;
    }

    get clone(){
        return  new Person( this.per.fName, this.per.lName, this.per.age );
    }
}

let p = new Person('Vivek', 'Negi', 30);

let c = new PersonPrototype( p );

let x = c.clone;

console.log( x );

x.lName = 'kala';

console.log( x );