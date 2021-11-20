import Beverage from './Beverage';

export default class Express extends Beverage {
  static PRICE: number = 0.10;

  constructor(beverage: Beverage) {
    super();
    this.description = "Express";
  }

  public cost(): number {
    return Express.PRICE;
  }
}