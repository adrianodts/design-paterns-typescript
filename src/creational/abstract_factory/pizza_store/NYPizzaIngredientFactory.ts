import PizzaIngredientFactory from './PizzaIngredientFactory';
import ThinCrustDough from './ThinCrustDough';
import FreshClams from './FreshClams';
import MarinaraSauce from './MarinaraSauce';
import ReggianoCheese from './ReggianoCheese';
import Cheese from './Cheese';
import Clams from './Clams';
import Dough from './Dough';
import Sauce from './Sauce';
import Veggies from './Veggies';
import Garlic from './Garlic';
import RedPepper from './RedPepper';
import Onion from './Onion';

export default class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createClams(): Clams {
    return new FreshClams();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();  
  }

  createCheese(): Cheese {
    return  new ReggianoCheese();
  }
  createVeggies(): Veggies[] {
    return ([ new Garlic(), new Onion(), new RedPepper() ] as Veggies[]);
  }
}