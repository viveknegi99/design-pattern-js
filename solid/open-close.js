let COLOR = Object.freeze({
    red: 'red',
    yellow: 'yellow',
    green: 'green'
});

let SIZE = Object.freeze({
    small: 'small',
    mdeium: 'medium',
    large: 'large'
});

class Product{
    constructor(name, color, size){
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

class Specification{
    constructor(){
        if( this.constructor === Specification){
            throw new Error('Cannot instantiate Abstract class')
        }
    }
    isSatisfied(val){ throw new Error('No implementation for isSatisfied method.')};
}


class SizeSpecification  extends Specification{
    constructor(size){
        super();
        this.size = size;
    }
    
    isSatisfied(val){ 
        if( val.size === this.size){
            return true;
        } else{
            return false;
        }
    }
}

class ColorSpecification  extends Specification{
    constructor(color){ super(); this.color = color}
    isSatisfied(val){ 
        if( val.color === this.color){
            return true;
        } else{
            return false;
        }
    }
}

function  advanceFilter(products, specification){
    return products.filter( p => specification.isSatisfied(p));    
}

let p1 = new Product('apple', COLOR.red, SIZE.small);
let p2 = new Product('orange', COLOR.yellow, SIZE.mdeium);
let p3 = new Product('mobile', COLOR.green, SIZE.large);

let pArr = [p1, p2, p3];

console.log( advanceFilter( pArr, new SizeSpecification( SIZE.large)));
console.log( advanceFilter( pArr, new ColorSpecification( COLOR.red)));

