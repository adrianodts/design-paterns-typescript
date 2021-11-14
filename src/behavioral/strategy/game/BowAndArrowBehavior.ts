import WeaponBehavior from './WeaponBehavior';

export default class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon(): String {
    return "I'm using a bow and arrow weapon!";
  }

}