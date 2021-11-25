import Pizza from '../factory_method/Pizza';

export default class NYCheesePizza extends Pizza {
  constructor(name: String) {
    super();
    this.name = name;
  }
}