import Pizza from './Pizza';

export default class VeggiePizza extends Pizza {
  constructor(name: String) {
    super();
    this.name = name;
  }
}