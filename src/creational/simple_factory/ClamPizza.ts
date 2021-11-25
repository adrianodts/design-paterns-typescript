import Pizza from './Pizza';

export default class ClamPizza extends Pizza {
  constructor(name: String) {
    super();
    this.name = name;
  }
}