class Coffee{
    constructor(milk){ this.milk = milk}
}

class Tea{
    constructor(milk){ this.milk = milk}
}

class HotDrinkFactory{
    prepare( amount ){
        throw new Error(' prepare is abstract method ');
    }
}

class CoffeeFactory extends HotDrinkFactory{
    prepare(amount){
        console.log(`Preparing coffee with ${amount} milk`);
        return new Coffee(amount);        
    }
}

class TeaFactory extends HotDrinkFactory {
    prepare( amount ){
        console.log(`Preparing Tea with ${amount} milk`);
        return new Tea( amount );
    }
}

let BEVERAGE_FACTORY = Object.freeze({
    coffee: CoffeeFactory,
    tea: TeaFactory
})

let OPT = Object.freeze({
    tea: 'tea',
    coffee: 'coffee'
})

let factObj = {};

for( let i in BEVERAGE_FACTORY ){
    factObj[i] = new BEVERAGE_FACTORY[i]();
}

let tea = factObj[OPT.tea].prepare(10);
let coffee = factObj[OPT.coffee].prepare(30);

console.log(tea, coffee);
