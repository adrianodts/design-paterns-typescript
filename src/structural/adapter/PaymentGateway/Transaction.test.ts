import PagSeguroTransaction from "./PagSeguroTransaction";
import PagSeguroTransactionAdapter from "./PagSeguroTransactionAdapter";
import PayPalTransaction from "./PayPalTransaction";
import PayPalTransactionAdapter from "./PayPalTransactionAdapter";

test("Should do transaction on PagSeguro", () => {
    const pagSegurotransaction = new PagSeguroTransaction("AHN67JNHT5HF", 1000, 2);
    const transaction = new PagSeguroTransactionAdapter(pagSegurotransaction);
    expect(transaction.status).toBe("paid");
})

test("Should do transaction on PayPal", () => {
    const payPalTransaction = new PayPalTransaction("123456", 1000, "S");
    const transaction = new PayPalTransactionAdapter(payPalTransaction);
    expect(transaction.status).toBe("paid");
})