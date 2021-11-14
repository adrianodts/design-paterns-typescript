import FlyBehavior from './FlyBehavior';

export default class FlyRocketPowered implements FlyBehavior {
  
  fly(): String {
    return "Yes. I'm flying like a rocket!";
  }
  
}