import Pizza from './Pizza';

export default class ChicagoPepperoniPizza extends Pizza {
  constructor(name: String) {
    super();
    this.name = name;
  }
}