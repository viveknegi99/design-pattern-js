class Car {
    constructor(name){this.name = name;}
    drive(){
        console.log('Driving a car named ' + this.name);        
    }
}

class ProxyCar {
    constructor(driver, car) {
        this.driver = driver;
        this._car = car;
    }
    drive(){
        if( this.driver.age < 18){
            console.log('Too young to drive');
            return;            
        }
        this._car.drive();
    }
}

class Driver{
    constructor(age){this.age = age;}
}

let c = new Car('sporty');
c.drive();

let d = new Driver( 16 );

let pc = new ProxyCar(d, c);

pc.drive();

d.age = 20;
pc.driver = d;
pc.drive();