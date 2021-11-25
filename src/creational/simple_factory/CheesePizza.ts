import Pizza from './Pizza';

export default class CheesePizza extends Pizza {
  constructor(name: String) {
    super();
    this.name = name;
  }
}