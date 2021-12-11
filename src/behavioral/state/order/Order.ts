import OpenStatus from "./OpenStatus";

export default class Order {
    status: OpenStatus;
    
    constructor() {
        this.status = new OpenStatus(this);
    }
    
    open() {
        this.status.open();
    }

    confirm() {
        this.status.confirm();
    }

    cancel() {
        this.status.cancel();
    }

    refund() {
        this.status.refund();
    }
}