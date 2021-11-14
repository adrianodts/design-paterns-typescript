import Character from './Character';
import SwordBehavior from './SwordBehavior';

export default class Queen extends Character {

  constructor() {
    super();
    this.weapon = new SwordBehavior();
  }

  fight(): String {
    return "I'm fighting like a Queen!";
  }
}