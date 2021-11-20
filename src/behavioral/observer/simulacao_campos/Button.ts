import Observable from './Observable';
import Observer from './Observer';

export default class Button implements Observable {
  protected observers: Observer[] = [];
  public value: String = "";  

  register(observer: Observer): void {
    this.observers.push(observer);
  }

  unregister(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
    console.log(`${observer.getName()} was unregistered.`)
  }

  notify(observable: Observable): void {
    this.observers.forEach(observer => {
      observer.update(observable);
    });
  }

  public buttonClick(value: String): void {
    this.value = value;
    this.notify(this);
  }

  public getValue(): String {
    return this.value;
  }
}