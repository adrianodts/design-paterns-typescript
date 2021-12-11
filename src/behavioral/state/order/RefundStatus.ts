import Order from "./Order";
import OrderStatus from "./OrderStatus";

export default class RefundStatus extends OrderStatus {
   
    value: string;

    constructor(order: Order) {
        super(order);
        this.value = "refunded";
    }

    open(): void {
        throw new Error("The order is already refounded");
    }

    confirm(): void {
        throw new Error("The order is already refounded");
    }

    cancel(): void {
        throw new Error("The order is already refounded");
    }

    refund(): void {
        throw new Error("The order is already refounded");
    }

}