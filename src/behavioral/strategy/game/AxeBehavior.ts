import WeaponBehavior from './WeaponBehavior';

export default class AxeBehavior implements WeaponBehavior {
  useWeapon(): String {
    return "I'm using a Axe weapon!";
  }

}