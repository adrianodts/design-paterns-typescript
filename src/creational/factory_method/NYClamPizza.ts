import Pizza from './Pizza';

export default class NYClamPizza extends Pizza {
  constructor(name: String) {
    super();
    this.name = name;
  }
}