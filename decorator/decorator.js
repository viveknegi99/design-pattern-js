class Shape {}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  resize(val) {
    this.radius *= val;
  }

  toString() {
    return `Drawing circle of radius ${this.radius}`;
  }
}

class Square extends Shape{
    constructor(side) {
        super();
        this.side = side;
    }

    resize(val) {
        this.side *= val;
    }

    toString(){
        return `Drawing Sqaure of Side ${this.side}`;
    }
}

class ColoredShape extends Shape {
  constructor(shape, color) {
    super();
    this.shape = shape;
    this.color = color;
  }

  toString() {
    return `${this.shape.toString()} of color ${this.color}`;
  }
}

class TransparentShape extends Shape {
    constructor(shape, transparency){
        super();
        this.shape = shape;
        this.transparency = transparency;
    }

    toString(){
        return `${this.shape.toString()} having transparency of ${this.transparency*.01}`;
    }
}

let c = new Circle(5);
let s = new Square(10);
console.log(c.toString());
console.log(s.toString());

let cc = new ColoredShape(c, "red");
let cs = new ColoredShape(s, "blue");
c.resize(2);
s.resize(5);
console.log(c.toString());
console.log(s.toString());

let ts = new TransparentShape(s, 9);
console.log(ts.toString());


console.log(cc.toString());
console.log(cs.toString());
