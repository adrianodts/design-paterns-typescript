import FlyBehavior from './FlyBehavior';

export default class FlyWithWings implements FlyBehavior {
  fly(): String {
    return "Yes. I can fly with wings!";
  }
}