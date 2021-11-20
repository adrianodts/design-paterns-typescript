import Beverage from './Beverage';

export default abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): String;
}