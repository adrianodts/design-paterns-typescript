import Beverage from './Beverage';

export default class Decaffeinated extends Beverage {
  static PRICE: number = 1.05;

  constructor(beverage: Beverage) {
    super();
    this.description = "Decaffeinated";
  }

  public cost(): number {
    return Decaffeinated.PRICE;
  }
}