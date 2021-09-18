import PayPalTransaction from "./PayPalTransaction";
import Transaction from "./Transaction";

export default class PayPalTransactionAdapter implements Transaction {
    
    trackNumber: string;
    amount: number;
    status: string;

    constructor(payPalTransaction: PayPalTransaction) {
        this.trackNumber = payPalTransaction.id;
        this.amount = payPalTransaction.amount;
        this.status = this.convertStatus(payPalTransaction.status);
    }

    convertStatus(status: string): string {
        switch (status) {
            case "S": 
                return "paid";
            case "W":
                return "waiting_payment"
            case "C":
                return "canceled";
            default: 
                throw new Error("Payment status not recognized.");
        }
    }
}