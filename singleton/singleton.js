class Person{
    constructor(fName, lName){
        if( this.constructor.instance ) {
            return this.constructor.instance;
        }
        this.fName = fName;
        this.lName = lName;
        this.constructor.instance = this;
    }
}
let p = new Person('Vivek', 'Negi');

console.log(p);

let k = new Person( 'red', 'black');
console.log(k);

