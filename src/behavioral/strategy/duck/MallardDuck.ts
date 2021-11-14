import Duck from './Duck';
import FlyWithWings from './FlyWithWings';
import Quack from './Quack';

export default class MallardDuck extends Duck {
  
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  public display(): void {
    console.log("Hey. I'm a MallardDuck.");
  }

}