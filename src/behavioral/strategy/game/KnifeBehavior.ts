import WeaponBehavior from './WeaponBehavior';

export default class KnifeBehavior implements WeaponBehavior {
  useWeapon(): String {
    return "I'm using a knife weapon!";
  }

}