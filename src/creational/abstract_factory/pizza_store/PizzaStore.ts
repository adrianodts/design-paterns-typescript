import Pizza from './Pizza';

export default abstract class PizzaStore {

  public orderPizza(type: String): Pizza {
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  abstract createPizza(type: String): Pizza;
}