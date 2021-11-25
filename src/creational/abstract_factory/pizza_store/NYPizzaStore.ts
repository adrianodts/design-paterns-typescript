import Pizza from './Pizza';
import PizzaIngredientFactory from './PizzaIngredientFactory';
import NYPizzaIngredientFactory from './NYPizzaIngredientFactory';
import PizzaStore from './PizzaStore';
import CheesePizza from './CheesePizza';
import ClamPizza from './ClamPizza';
import VeggiePizza from './VeggiePizza';

export default class NYPizzaStore extends PizzaStore {
  ingredientFactory: PizzaIngredientFactory = new NYPizzaIngredientFactory();
  
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