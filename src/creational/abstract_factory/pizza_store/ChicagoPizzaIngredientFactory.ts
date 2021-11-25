import PizzaIngredientFactory from './PizzaIngredientFactory';
import ThickCrustDough from './ThickCrustDough';
import FrozenClams from './FrozenClams';
import PlumTomatoSauce from './PlumTomatoSauce';
import MozzarellaCheese from './MozzarellaCheese';
import Cheese from './Cheese';
import Clams from './Clams';
import Dough from './Dough';
import Sauce from './Sauce';
import Veggies from './Veggies';
import RedPepper from './RedPepper';

export default class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {

  createDough(): Dough {
    return new ThickCrustDough();
  }

  createClams(): Clams {
    return new FrozenClams();
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce();  
  }

  createCheese(): Cheese {
    return  new MozzarellaCheese();
  }

  createVeggies(): Veggies[] {
    return ([ new RedPepper() ] as Veggies[]);
  }
}