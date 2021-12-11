import CancelStatus from "./CancelStatus";
import Order from "./Order";
import OrderStatus from "./OrderStatus";
import RefoundStatus from "./RefundStatus";

export default class ConfirmStatus extends OrderStatus {
    value: string;
    
    constructor(order: Order) {
        super(order);
        this.value = "confirmed";
    }

    open(): void {
        throw new Error("The order is already confirmed");
    }
    confirm(): void {
        throw new Error("The order is already confirmed");
    }
    cancel(): void {
        this.order.status = new CancelStatus(this.order);
    }
    refund(): void {
        this.order.status = new RefoundStatus(this.order);
    }
}