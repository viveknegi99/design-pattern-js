class Paint{
    constructor(color){
        this.color = color;
    }

    do(msg){
        console.log(`Painting message: ${msg} with color ${this.color}`);        
    }
}

class PaperPaint{
    constructor(paint ){
        this.paint = paint;
    }
    print(msg){
        this.paint.do(msg);
    }
}

let p = new Paint('red');
let paper = new PaperPaint(p);
paper.print('hello');
