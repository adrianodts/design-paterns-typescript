import Beverage from './Beverage';
import CondimentDecorator from './CondimentDecorator';

export default class Moca extends CondimentDecorator {
  
  static PRICE: number = 0.20;
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): String {
    return `${this.beverage.getDescription()}, Moca`; 
  }
  
  cost(): number {
    return Moca.PRICE + this.beverage.cost();
  }

}