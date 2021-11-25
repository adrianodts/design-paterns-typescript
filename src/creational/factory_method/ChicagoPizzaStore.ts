import ChicagoCheesePizza from './ChicagoCheesePizza';
import ChicagoClamPizza from './ChicagoClamPizza';
import ChicagoPepperoniPizza from './ChicagoPepperoniPizza';
import ChicagoVeggiePizza from './ChicagoVeggiePizza';
import Pizza from './Pizza';
import PizzaStore from './PizzaStore';

export default class ChicagoPizzaStore extends PizzaStore {

  createPizza(type: String): Pizza {
    if ('cheese' === type) {
      return new ChicagoCheesePizza(type);
    } else if ('veggie' === type) {
      return new ChicagoVeggiePizza(type);
    } else if ('clam' === type) {
      return new ChicagoClamPizza(type);
    } else if ('pepperoni' === type) {
      return new ChicagoPepperoniPizza(type);
    }
    throw new Error(`Pizza ${type} does not exists.`);
  }

}