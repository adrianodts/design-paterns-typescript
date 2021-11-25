import CheesePizza from './CheesePizza';
import ClamPizza from './ClamPizza';
import PepperoniPizza from './PepperoniPizza';
import Pizza from './Pizza';
import VeggiePizza from './VeggiePizza';

export default class SimplePizzaFactory {
  public create(type: String): Pizza {
    if ('cheese' === type) {
      return new CheesePizza(type);
    } else if ('veggie' === type) {
      return new VeggiePizza(type);
    } else if ('clam' === type) {
      return new ClamPizza(type);
    } else if ('pepperoni' === type) {
      return new PepperoniPizza(type);
    }
    throw new Error(`Pizza ${type} does not exists.`);
  }
}