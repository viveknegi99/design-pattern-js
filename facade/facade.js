class Mortgage{
    constructor(name) {
        this.name = name;
    }

    applyFor(amount){
        let status = 'Rejected';
        if( BankAccount.verify( this.name, amount)) {
            console.log('inside Bank');
            
            status = 'Approved';
        } else if( Credit.verify( this.name )) {
            console.log('inside credit');
            
            status = 'Approved';
        }

        return `${this.name} has applied for ${amount} and request status is ${status}`;
    }
}

class BankAccount {
    
   static verify(name, amount){
        if( BankAccount.UserMap.get(name)){
            console.log('name found in bank');
            
            if( (BankAccount.UserMap.get(name) - amount) >= 0 ){
                BankAccount.UserMap.set( name, (BankAccount.UserMap.get(name) - amount) )
                console.log(BankAccount.UserMap);
                
                return true;
            } else{
                return false;
            }
        } else{
            console.log('name not found in bank');
            
            return false;
        }
    }

    static addAccount(name,amount){
        BankAccount.UserMap.set(name,  amount);
    }
}
BankAccount.UserMap = new Map();

class Credit {
    static verify( name ){
        if( Credit.users.includes( name )) {
            console.log('name included');
            
            return true;
        } else {
            console.log('name excluded');
            
            return false;
        }
    }

    static addUser( name ) {
        Credit.users.push(name);
    }
}
Credit.users = [];

BankAccount.addAccount('Vivek', 500);
Credit.addUser('Vivek');

let m1 = new Mortgage('Vivek');
let res = m1.applyFor(600);
console.log(res);
res = m1.applyFor(500);
console.log(res)

let m2 = new Mortgage('Vivek1');
res = m2.applyFor(500);
console.log(res);
