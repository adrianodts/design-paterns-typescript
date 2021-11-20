import Cofee from './Cofee';
import Cream from './Cream';
import Moca from './Moca';
import Soy from './Soy';

test("Should calculate cost of cofee with double moca, soy and cream", () => {

  const beverage = new Cream(new Soy(new Moca(new Moca(new Cofee()))));

  const cofee = 0.99;
  const moca = 0.40;
  const soy = 0.15;
  const cream = 0.10;
  const cost = Number.parseFloat(new Number(cofee + moca + soy + cream).toFixed(12));

  console.log(`Cost of ${beverage.getDescription()} is ${beverage.cost()}`)

  expect(cost).toBe(beverage.cost());
})