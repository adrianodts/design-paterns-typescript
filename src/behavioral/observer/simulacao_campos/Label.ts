import Observable from './Observable';
import Observer from './Observer';

export default class Label implements Observer {
  static NAME: String = "Label";

  private value: String | any;
  
  public getName(): String {
    return Label.NAME;
  }

  public getValue(): String {
    return this.value;
  }

  update(observable: Observable): void {
    this.value = observable.getValue();
  }
}