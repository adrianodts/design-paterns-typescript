import Duck from './Duck';
import FlyNoWay from './FlyNoWay';
import Quack from './Quack';

export default class ModelDuck extends Duck {
  
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log("Hey. I'm a ModelDuck.");
  }

}