class BankAccount {
  constructor(amount = 0) {
    this.amount = amount;
  }
  deposit(val) {
    this.amount += val;
    console.log(`Amount: ${this.amount} after depositing sum of ${val}`);
  }
  withDraw(val) {
    this.amount -= val;
    console.log(`Amount: ${this.amount} after withdraw sum of ${val}`);
  }
}

let COMMAND = Object.freeze({
    deposit: 0,
    withdraw: 1
})

class BankAccountCmd {
    constructor(bankAccount, amount, cmd) {
        this.bankAccount = bankAccount;
        this.amount = amount;
        this.cmd = cmd;
    }
    do() {
        switch(this.cmd){
            case COMMAND.deposit :  {
                this.bankAccount.deposit(this.amount);
                break;
            }
            case COMMAND.withdraw: {
                this.bankAccount.withDraw(this.amount);
                break;
            }            
        }
    }
    undo() {
        switch(this.cmd) {
            case COMMAND.deposit :  {
                this.bankAccount.withDraw(this.amount);
                break;
            }
            case COMMAND.withdraw: {
                this.bankAccount.deposit(this.amount);
                break;
            }    
        }
    }
}

let b = new BankAccount();
let c = new BankAccountCmd(b, 100, COMMAND.deposit);
c.do();
c = new BankAccountCmd(b, 50, COMMAND.withdraw);
c.do();
c.undo();