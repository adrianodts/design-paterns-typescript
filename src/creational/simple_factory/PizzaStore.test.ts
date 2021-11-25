import CheesePizza from './CheesePizza';
import PizzaStore from './PizzaStore';
import SimplePizzaFactory from './SimplePizzaFactory';

test("Should create cheese pizza", () => {
  const type = "cheese";
  const pizzaStore = new PizzaStore(new SimplePizzaFactory());
  const pizza = pizzaStore.orderPizza(type);
  expect(pizza).toBeInstanceOf(CheesePizza);
  expect(pizza.getName()).toBe(type);
})