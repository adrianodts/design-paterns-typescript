import Pizza from './Pizza';

export default class ChicagoVeggiePizza extends Pizza {
  constructor(name: String) {
    super();
    this.name = name;
  }
}