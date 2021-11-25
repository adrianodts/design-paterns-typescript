import Pizza from './Pizza';
import PizzaIngredientFactory from './PizzaIngredientFactory';

export default class CheesePizza extends Pizza {
  ingredientFactory: PizzaIngredientFactory;

  prepare(): void {
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
  }

  constructor(ingredientFactory: PizzaIngredientFactory, name: String) {
    super();
    this.name = name;
    this.ingredientFactory = ingredientFactory;
  }
}