import ChicagoPizzaStore from './ChicagoPizzaStore';
import NYPizzaStore from './NYPizzaStore';

test("Should create NY cheese pizza", () => {
  const type = "cheese";
  const pizzaStore = new NYPizzaStore();
  const pizza = pizzaStore.orderPizza(type);
  expect(pizza.getName()).toBe(type);
})