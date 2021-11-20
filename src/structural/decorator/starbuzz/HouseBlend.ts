import Beverage from './Beverage';

export default class HouseBlend extends Beverage {
  static PRICE: number = 0.89;

  constructor(beverage: Beverage) {
    super();
    this.description = "House Blend Cofee";
  }

  public cost(): number {
    return HouseBlend.PRICE;
  }
}