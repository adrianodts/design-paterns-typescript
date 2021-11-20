import Beverage from './Beverage';
import CondimentDecorator from './CondimentDecorator';

export default class Cream extends CondimentDecorator {
  
  static PRICE: number = 0.10;
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): String {
    return `${this.beverage.getDescription()}, Cream`; 
  }
  
  cost(): number {
    return Cream.PRICE + this.beverage.cost();
  }

}