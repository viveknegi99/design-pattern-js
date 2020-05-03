class NumberExpression {
    constructor(val) {
        this.val = val;
    }
    visit(visitor) {
        visitor.nunberVisitor(this);
    }
}
class AdditionExpression {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    visit(visitor){
        visitor.additionVisitor(this);
    }

}
class Visitor {
    constructor() {
        this.buffer = [];
    }
}
class ExpressionVisitor extends Visitor {
    constructor(){
        super();
    }
    nunberVisitor(numExp) {
        this.buffer.push(numExp.val);
    }
    additionVisitor(addExp) {
        this.buffer.push('(');
        addExp.left.visit(this);
        this.buffer.push('+');
        addExp.right.visit(this);
        this.buffer.push(')');
    }
}

let ae = new AdditionExpression(
            new NumberExpression(1),
            new AdditionExpression(
                new NumberExpression(2),
                new NumberExpression(3)
            )
)
let ev = new ExpressionVisitor();
ev.additionVisitor(ae)
console.log(ev.buffer.join(''));
