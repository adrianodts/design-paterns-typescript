import Clams from './Clams';
import Dough from './Dough';
import Sauce from './Sauce';
import Cheese from './Cheese';
import Veggies from './Veggies';

export default interface PizzaIngredientFactory {
  createDough(): Dough;
  createClams(): Clams;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggies[];
}