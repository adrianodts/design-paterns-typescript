import Beverage from './Beverage';
import CondimentDecorator from './CondimentDecorator';

export default class Soy extends CondimentDecorator {
  
  static PRICE: number = 0.15;
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): String {
    return `${this.beverage.getDescription()}, Soy`; 
  }
  
  cost(): number {
    return Soy.PRICE + this.beverage.cost();
  }

}