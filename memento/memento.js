class Balance {
    constructor(val){ this.val = val}
}
class Account {
    constructor(amount) {
        this.amount = amount;
    }
    deposit(amount) {
        this.amount += amount;
        return new Balance(this.amount);
    }
    restore(bal) {
        this.amount = bal.val;
    }

}
let acc = new Account( 50 );
console.log(acc);

let bal1 = acc.deposit(50);
console.log(acc, bal1);
let bal2 = acc.deposit(100);
console.log(bal2);
acc.restore(bal1);
console.log(acc);


