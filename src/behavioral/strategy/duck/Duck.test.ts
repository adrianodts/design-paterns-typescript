import Duck from './Duck';
import FlyRocketPowered from './FlyRocketPowered';
import MallardDuck from './MallardDuck';
import ModelDuck from './ModelDuck';

test("Should perform quack behavior", () => {
  const mallarDuck: Duck = new MallardDuck();
  const sound = mallarDuck.performQuack();

  expect(sound).toBe("Yes. I can make quack sound!");
})

test("Should perform fly behavior", () => {
  const mallarDuck: Duck = new MallardDuck();
  const fly = mallarDuck.performFly();

  expect(fly).toBe("Yes. I can fly with wings!");
})

test("Should perform flying model behavior", () => {
  const modelDuck: Duck = new ModelDuck();
  let fly = modelDuck.performFly();
  expect(fly).toBe("No. I can't fly!");
  modelDuck.setFlyBehavior(new FlyRocketPowered());
  fly = modelDuck.performFly();
  expect(fly).toBe("Yes. I'm flying like a rocket!");
})