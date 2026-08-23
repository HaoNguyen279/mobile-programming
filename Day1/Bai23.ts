interface Payment {
    pay(amount: number): void;
}
class CashPayment implements Payment {
    pay(amount: number): void {
      console.log(`paid ${amount.toLocaleString()} VND`);
    }
}
class CardPayment implements Payment {
    constructor(private cardNumber: string) {}
    pay(amount: number): void {
      console.log(`paid ${amount.toLocaleString()} VND (*${this.cardNumber.slice(-4)}).`);
    }
}
const cashMethod: Payment = new CashPayment();
cashMethod.pay(50000);
const cardMethod: Payment = new CardPayment("1232132131");
cardMethod.pay(250000);