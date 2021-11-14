import FlyBehavior from './FlyBehavior';

export default class FlyNoWay implements FlyBehavior {
  fly(): String {
    return "No. I can't fly!";
  }
}