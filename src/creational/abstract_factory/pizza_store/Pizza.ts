import Cheese from './Cheese';
import Clams from './Clams';
import Dough from './Dough';
import Sauce from './Sauce';
import Veggies from './Veggies';

export default abstract class Pizza {

  protected name: String = 'Not defined yet';
  protected dough: Dough | any;
  protected sauce: Sauce | any;
  protected cheese: Cheese | any;
  protected clams: Clams | any;
  protected veggies: Veggies[] | any;

  public getName(): String {
    return this.name
  }
  
  abstract prepare(): void ;

  public bake() : void {
    console.log('Baking pizza');
  }

  public cut() : void {
    console.log('Cutting pizza');
  }

  public box() : void {
    console.log('Boxing pizza');
  }

}