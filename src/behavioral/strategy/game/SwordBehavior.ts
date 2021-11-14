import WeaponBehavior from './WeaponBehavior';

export default class SwordBehavior implements WeaponBehavior {
  useWeapon(): String {
    return "I'm using a Sword weapon!";
  }

}