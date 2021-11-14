import QuackBehavior from './QuackBehavior';

export default class Quack implements QuackBehavior {
  quack(): String {
    return "Yes. I can make quack sound!";
  }

}