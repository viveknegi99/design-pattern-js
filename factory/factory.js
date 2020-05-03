let PROP_TYPE = Object.freeze({
    head :'head',
    tail : 'tail',
    color : 'color'

})

class HeadClass {
    constructor(prop){
        this.head = prop.head;
    }
}

class TailClass{
    constructor(prop){
        this.tail = prop.tail;
    }
}

class ColorClass{
    constructor(prop){
        this.color = prop.color;
    }
}

let PartFactory = {};

let partMap = new Map();

partMap.set(PROP_TYPE.head, HeadClass );
partMap.set(PROP_TYPE.tail, TailClass )
partMap.set(PROP_TYPE.color, ColorClass )

partMap.forEach( (v, k) => {
    PartFactory[k] = v;
})
// PartFactory[PROP_TYPE.head] = class{
//     constructor(prop){
//         this.head = prop.head;
//     }
// }

// PartFactory[PROP_TYPE.tail] = class{
//     constructor(prop){
//         this.tail = prop.tail;
//     }
// }

// PartFactory[PROP_TYPE.color] = class{
//     constructor(prop){
//         this.color = prop.color;
//     }
// }

class ReptileFactory{
    constructor( type, prop){
        return new PartFactory[type](prop)
    }
}

let prop = {
    head: 'large head snake',
    tail: 'small tail snake',
    color: 'red color snake'
}

let r = {};
r[PROP_TYPE.head] = new ReptileFactory( PROP_TYPE.head, prop);
console.log(r);
r[PROP_TYPE.tail] = new ReptileFactory( PROP_TYPE.tail, prop);
console.log(r);
r[PROP_TYPE.color] = new ReptileFactory( PROP_TYPE.color, prop);
console.log(r);

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class PointFactory{
    static getCartesianPoint(x, y){
       return  new Point(x, y);
    }

    static getPolarPoint(rho, theta){
        return new Point(rho*Math.cos(theta), rho*Math.sin(theta));
    }
}

let c = PointFactory.getCartesianPoint(2, 3);
let p = PointFactory.getPolarPoint(5, Math.PI/2);
console.log(c, p);
