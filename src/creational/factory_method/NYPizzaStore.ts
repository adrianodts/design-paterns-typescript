import NYCheesePizza from './NYCheesePizza';
import NYVeggiePizza from './NYVeggiePizza';
import NYClamPizza from './NYClamPizza';
import NYPepperoniPizza from './NYPepperoniPizza';
import Pizza from './Pizza';
import PizzaStore from './PizzaStore';

export default class NYPizzaStore extends PizzaStore {

  createPizza(type: String): Pizza {
    if ('cheese' === type) {
      return new NYCheesePizza(type);
    } else if ('veggie' === type) {
      return new NYVeggiePizza(type);
    } else if ('clam' === type) {
      return new NYClamPizza(type);
    } else if ('pepperoni' === type) {
      return new NYPepperoniPizza(type);
    }
    throw new Error(`Pizza ${type} does not exists.`);
  }

}