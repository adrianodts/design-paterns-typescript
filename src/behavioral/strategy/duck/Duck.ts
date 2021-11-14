import FlyBehavior from './FlyBehavior';
import QuackBehavior from './QuackBehavior';

export default abstract class Duck {
  protected flyBehavior: FlyBehavior | any;
  protected quackBehavior: QuackBehavior | any;

  constructor() {
  }

  public abstract display(): void;
  
  public performFly(): String {
    return this.flyBehavior.fly();
  }

  public performQuack(): String {
    return this.quackBehavior.quack();
  }

  public swim(): void {
    console.log("All ducks float, even decoys!");
  }

  public setFlyBehavior(flyBehavior: FlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  public setQuackBehavior (quackBehavior: QuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }
}