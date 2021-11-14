import AxeBehavior from './AxeBehavior';
import Character from './Character';
import Queen from './Queen';

test("Should fight like a Queen, using a Sword and Axe", () => {
  const queen: Character = new Queen();
  const fight = queen.fight();
  let weapon = queen.useWeapon();
  expect(fight).toBe("I'm fighting like a Queen!");
  expect(weapon).toBe("I'm using a Sword weapon!");
  queen.setWeapon(new AxeBehavior());
  weapon = queen.useWeapon();
  expect(weapon).toBe("I'm using a Axe weapon!");
})