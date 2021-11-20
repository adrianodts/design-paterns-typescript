import Observable from './Observable';
import Observer from './Observer';

export default class InputText implements Observer {
  static NAME: String = "InputText";

  private value: String | any;
  
  public getName(): String {
    return InputText.NAME;
  }

  public getValue(): String {
    return this.value;
  }

  update(observable: Observable): void {
    this.value = observable.getValue();
  }
}