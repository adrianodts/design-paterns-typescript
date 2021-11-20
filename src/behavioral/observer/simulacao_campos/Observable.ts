import Observer from './Observer';

export default interface Observable {
  getValue(): String;
  register(observer: Observer): void;
  unregister(observer: Observer): void;
  notify(observable: Observable): void;
}