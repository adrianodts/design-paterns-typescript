import QuackBehavior from './QuackBehavior';

export default class Squeak implements QuackBehavior {
  quack(): String {
    return "Yes. I can make squeak sound!";
  }

}