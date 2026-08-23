
class BankAccount{
    constructor(public balance : number) {}
    deposit(amount : number) : void{
        this.balance += amount;
    }
    withdraw(amount : number) : void {
        if(this.balance > amount){
            this.balance -= amount;
        }
    }
}


const bank = new BankAccount(5000);
console.log("default: " + bank.balance);

bank.deposit(2000);
console.log("deposit: " + bank.balance);

bank.withdraw(999);
console.log("withdraw: " + bank.balance);

