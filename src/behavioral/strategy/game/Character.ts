import WeaponBehavior from './WeaponBehavior';

export default abstract class Character {
  protected weapon: WeaponBehavior | any;

  abstract fight(): String;

  public setWeapon(weapon: WeaponBehavior) {
    this.weapon = weapon;
  }

  public useWeapon(): String {
    return this.weapon.useWeapon();
  }
}