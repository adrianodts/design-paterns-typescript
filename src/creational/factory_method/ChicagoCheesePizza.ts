import Pizza from './Pizza';

export default class ChicagoCheesePizza extends Pizza {
  constructor(name: String) {
    super();
    this.name = name;
  }
}