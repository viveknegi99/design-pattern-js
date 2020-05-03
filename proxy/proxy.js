class Percentage{
    constructor( val ){ this.value = val}
    valueOf(){ return this.value/100}
    toString(){return `${this.value}%`}
}

let p = new Percentage(5);
console.log(`${p} percent of 50 is ${50*p}`);

class Property{
    constructor(name, value){
        this.name = name;
        this._value = value;
    }

    get value(){ return this._value}
    set value( val ){
        if( val === this.value){
            console.log('nothing to set');
            return;
        }
        this._value = val;
        console.log('Value updated');
        
    }
}

class Creature{
    constructor(name){
        this.name = name;
        this._agility = new Property('Agility', 10);
    }

    get agility(){ return this._agility.value }

    set agility(val) {
        this._agility.value = val;
    }
}

let c = new Creature('Vivek');
console.log(c.agility);
c.agility = 10;

c.agility = 20;
console.log(c.agility);
