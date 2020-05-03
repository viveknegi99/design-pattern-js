class Person{
    constructor(){
        this.name = '';
        // address
        this.city=this.street=this.pincode='';
        // job
        this.company=this.position='';
        this.salary=0;
    }
    toString(){
        return (`
        Person ${this.name}
        lives in city: ${this.city} 
        on street: ${this.street}
         having pincode : ${this.pincode}
         works in company: ${this.company}
         at position: ${this.position}
         earns ${this.salary} per month`);        
    }
}

class PersonBuilder{
    constructor(person = new Person()){
        this.person =person;
    }

    ofName( name ){
        this.person.name = name;
        return this;
    }

    get lives(){
        return new PersonAddressBuilder( this.person );
    }

    get works(){
        return new PersonJobBuilder( this.person );
    }

    build(){
        return this.person;
    }
}

class PersonAddressBuilder extends PersonBuilder {
    constructor(person){
        super(person);
    }

    livesIn(city){
        this.person.city = city;
        return this;
    }
    
    on( street ){
        this.person.street = street;
        return this;
    }

    ofPincode( pincode ){
        this.person.pincode = pincode;
        return this;
    }
}

class PersonJobBuilder extends PersonBuilder {
    constructor( person ){
        super( person );
    }
    
    inCompany( company ){
        this.person.company = company;
        return this;
    }

    atPosition( position ){
        this.person.position = position;
        return this;
    }

    havingSalary( salary ){
        this.person.salary = salary;
        return this;
    }
}

let p = new PersonBuilder();
let person = p.ofName('Vivek').lives.livesIn('Delhi').on('back board').ofPincode('AD089').
works.inCompany('Infosys').atPosition('Manager').havingSalary(500).build();

console.log(person.toString());
