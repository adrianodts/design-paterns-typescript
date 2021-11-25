import Pizza from './Pizza';

export default class ChicagoClamPizza extends Pizza {
  constructor(name: String) {
    super();
    this.name = name;
  }
}