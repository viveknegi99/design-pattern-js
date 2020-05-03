class NumberExpression{
    constructor(val) {
        this.val = val;
    }

}
class AdditionExpression {
    constructor(left, right){
        this.left = left;
        this.right = right;
    }    
}
class ExpressionPrinter {
    print(i , buffer) {
        if( i instanceof NumberExpression) {
            buffer.push(i.val);
        } else if( i instanceof AdditionExpression) {
            buffer.push('(');
            this.print( i.left, buffer);
            buffer.push('+');
            this.print( i.right, buffer);
            buffer.push(')');
        }
    }
}
// 1 + (2 +3)
let ae = new AdditionExpression(
    new NumberExpression(1),
    new AdditionExpression(
        new NumberExpression(2),
        new NumberExpression(3)
    )
)
let buffer = [];
let ep = new ExpressionPrinter();
ep.print(ae, buffer);
console.log(buffer.join(''));
 