import Beer from "./Beer";
import Order from "./Order";
import Water from "./Water";
import Whisky from "./Whisky";

test("Should calculate item taxes", () => {
    const order = new Order();
    order.addItem(new Beer("Coruja 600ml", 20));
    order.addItem(new Whisky("Jack Daniels",100));
    order.addItem(new Water("Crystal 500ml", 20));
    expect(order.getTaxes()).toBe(11);
})