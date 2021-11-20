import Beverage from './Beverage';

export default class Cofee extends Beverage {
  static PRICE: number = 0.99;

  constructor() {
    super();
    this.description = "Cofee";
  }

  public cost(): number {
    return Cofee.PRICE;
  }
}