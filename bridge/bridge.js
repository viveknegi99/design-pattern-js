class RasterRenderer{
    renderCircle( val ){
        console.log(`Drawing Pixels for Circle of radius ${val}`);        
    }
}

class VectorRenderer{
    renderCircle( val ){
        console.log(`Drawing  Circle of radius ${val}`);        
    }
}

class Shape{
    constructor( renderer ){
        this.renderer = renderer;
    }
}

class Circle extends Shape{
    constructor(renderer, radius){
        super( renderer );
        this.radius = radius;
    }
    draw(){
        this.renderer.renderCircle( this.radius );
    }
}

let v = new VectorRenderer();
let r = new RasterRenderer();

let c = new Circle(v,5);
c.draw();

c = new Circle(r, 10);
c.draw();