import Pizza from './Pizza';
import SimplePizzaFactory from './SimplePizzaFactory';

export default class PizzaStore {

  private simplePizzaFactory: SimplePizzaFactory;

  constructor(simplePizzaFactory: SimplePizzaFactory) {
    this.simplePizzaFactory = simplePizzaFactory;
  }

  public orderPizza(type: String): Pizza {
    let pizza: Pizza;
    pizza = this.simplePizzaFactory.create(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}