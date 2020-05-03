class Event {
    constructor(){
        this.count = 0;
        this.handlers = new Map();
    }
    subscribe(cb) {this.handlers.set(this.count, cb); return this.count++}
    unsubscribe(id) { this.handlers.delete(id)}
    emit(sender, arg) {
        this.handlers.forEach( (fn, key) => {
            fn(sender, arg);
        })
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this._age;        
        this.ageSubscription = new Event();
    }
    get age() { return this._age; }
    set age(val) {
        if( this.age == val) return;
        this._age = val;
        this.ageSubscription.emit();
    }
}

class RegistrationChecker {
    constructor(person) {
        this.person = person;
        this.person.ageSubscription.subscribe( this.canDrive.bind(this) );
    }
    canDrive() {
        if(this.person.age >= 18) {
            console.log(`${this.person.name} can drive!!!`);            
        } else {
            console.log(`${this.person.name} is too young to drive`);            
        }
    }
}

let p = new Person('Vivek');
let reg = new RegistrationChecker(p);
p.age = 16;
p.age = 16;
p.age = 20;