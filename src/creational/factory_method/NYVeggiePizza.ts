import Pizza from './Pizza';

export default class NYVeggiePizza extends Pizza {
  constructor(name: String) {
    super();
    this.name = name;
  }
}