function Person( name ){
    this.name = name;
} 

Person.prototype.speak = function(){
    console.log(`${ this.name } Person of age ${ this.age} speaks from parent`);    
}

function Student(name, age){
    Person.call(this, name);
    this.age = age;
}

Student.prototype = Object.create( Person.prototype );
Student.prototype.constructor = Student;

Student.prototype.sing = function(){
    console.log(`${ this.name } Person of age ${ this.age} speaks from child`);    
}

let s = new Student('Vivek', 30);
s.speak();
s.sing();
console.log(s);
