import QuackBehavior from './QuackBehavior';

export default class MuteQuack implements QuackBehavior {
  quack(): String {
    return "No. I can't make any sound!";
  }

}