import Pizza from './Pizza';
import PizzaIngredientFactory from './PizzaIngredientFactory';
import ChicagoPizzaIngredientFactory from './ChicagoPizzaIngredientFactory';
import PizzaStore from './PizzaStore';
import CheesePizza from './CheesePizza';
import ClamPizza from './ClamPizza';
import VeggiePizza from './VeggiePizza';

export default class ChicagoPizzaStore extends PizzaStore {
  ingredientFactory: PizzaIngredientFactory = new ChicagoPizzaIngredientFactory();
  
  createPizza(type: String): Pizza {
    let pizza: Pizza | any;
    if (type === 'cheese') {
      pizza = new CheesePizza(this.ingredientFactory, type);
    } else if (type === 'clam') {
      pizza = new ClamPizza(this.ingredientFactory, type);
    } else if (type === 'clam') {
      pizza = new VeggiePizza(this.ingredientFactory, type);
    }
    return pizza;
  }
  
}