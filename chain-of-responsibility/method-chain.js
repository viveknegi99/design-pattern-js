class Creature {
    constructor(name, strength, defence){
        this.name = name;
        this.strength = strength;
        this.defence = defence;
    }

    toString(){
        return `${this.name}: ${this.strength} / ${this.defence}`;
    }
}

class CreatureModifier {
    constructor(creature){
        this.creature = creature;
        this.next = null;
    }
    add(modifier){
        if(this.next){
            this.next.add(modifier);            
        } else {
            this.next = modifier;
        }
    }
    handle(){
        if(this.next) this.next.handle();
    }
}

class StrengthModifier extends CreatureModifier {
    constructor( creature ){
        super(creature);
    }
    handle(){
        console.log(`Dobling the strenght of ${this.creature.name}`);
        this.creature.strength *= 2;
        // console.log(this.creature.toString());        
        super.handle();
    }
}

class DefenceModifier extends CreatureModifier {
    constructor(creature){
        super(creature);
    }
    handle(){
        console.log(`Beefing up the defence of ${this.creature.name}`);
        this.creature.defence +=1;
        //console.log(this.creature.toString()); 
        super.handle();
    }
}

let c = new Creature('Vivek', 10, 5);
console.log(c.toString());
let m = new CreatureModifier();
m.add( new StrengthModifier(c));
m.add( new DefenceModifier(c));
m.add( new DefenceModifier(c));
m.add( new StrengthModifier(c));
m.handle();
console.log(c.toString());
