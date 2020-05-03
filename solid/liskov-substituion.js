class Rectangle{
    constructor(width, height){
        this._width = width;
        this._height = height;
    }
    get width(){ return this._width}
    get height(){ return this._height}

    set width( val ){ this._width = val}
    set height( val ){this._height = val}

    get area(){
        return this._width * this._height;
    }
}

class Square extends Rectangle{
    constructor( size ){
        super(size, size);        
    }

    set width( val ){
        this._width = this._height = val;
    }

    set height( val ){
        this._width = this._height = val;
    }
}

function calculate( rec ){
    let width = rec._width;
    rec.height = 10;
    
    console.log(
        `Expected area of ${10*width}, ` +
        `got ${rec.area}`)
}

let r = new Rectangle(2, 3);
let s = new Square(4);

calculate(r);
calculate(s);

