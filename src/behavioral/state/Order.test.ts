import Order from "./Order";

test("Should create an order with opened status", () => {
    const order = new Order();
    expect(order.status.value).toBe("open");
})

test("Should create an order with changes status to confirmed", () => {
    const order = new Order();
    order.confirm();
    expect(order.status.value).toBe("confirmed");
})

test("Should create an order with changes status to cancelled", () => {
    const order = new Order();
    order.cancel();
    expect(order.status.value).toBe("cancelled");
})
test("Should create an order and not changes status confirmed to opened", () => {
    const order = new Order();
    order.confirm();
    expect(() => order.open()).toThrow(new Error("The order is already confirmed"));
})

test("Should create an order and not changes status cancelled to open", () => {
    const order = new Order();
    order.cancel();
    expect(() => order.open()).toThrow(new Error("The order is already cancelled"));
})

test("Should create an order and changes status to refounded", () => {
    const order = new Order();
    order.confirm();
    order.refund();
    expect(order.status.value).toBe("refunded");
})