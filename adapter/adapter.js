class ShippingOrder{

    constructor(){
        this.ship = new ShipAdapter();
       // this.ship = new OldShip();
    }
     order(quantity, price){
       return this.ship.order( quantity, price);
    }
}

class ShipAdapter{
    constructor(  ){
        this.ship = new Ship();        
    }

     order( quantity, price){
       this.ship.price( price );
       this.ship.quantity( quantity );
         
      return this.ship.calculate();
    }
}

class Ship{
    constructor(){
        this._price ;
        this._quantity;
    }
    quantity( q ){ this._quantity = q}
    
    price( p ){ this._price = p}

    calculate(){
        return this._price * this._quantity;
    }
}

class OldShip{
    constructor(){}
    order(quantity, price){
        return quantity * price;
    }
}

let o = new ShippingOrder();
let x = o.order(2, 100);

console.log(x);

