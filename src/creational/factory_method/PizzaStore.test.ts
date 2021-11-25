import ChicagoCheesePizza from './ChicagoCheesePizza';
import ChicagoPizzaStore from './ChicagoPizzaStore';
import NYPepperoniPizza from './NYPepperoniPizza';
import NYPizzaStore from './NYPizzaStore';

test("Should create Chicago cheese pizza", () => {
  const type = "cheese";
  const pizzaStore = new ChicagoPizzaStore();
  const pizza = pizzaStore.orderPizza(type);
  expect(pizza).toBeInstanceOf(ChicagoCheesePizza);
  expect(pizza.getName()).toBe(type);
})

test("Should create NY pepperoni pizza", () => {
  const type = "pepperoni";
  const pizzaStore = new NYPizzaStore();
  const pizza = pizzaStore.orderPizza(type);
  expect(pizza).toBeInstanceOf(NYPepperoniPizza);
  expect(pizza.getName()).toBe(type);
})