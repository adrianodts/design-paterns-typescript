import Pizza from './Pizza';

export default class PepperoniPizza extends Pizza {
  constructor(name: String) {
    super();
    this.name = name;
  }
}