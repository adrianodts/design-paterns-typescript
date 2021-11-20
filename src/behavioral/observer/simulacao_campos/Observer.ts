import Observable from './Observable';

export default interface Observer {
  getName(): String;
  getValue(): String;
  update(observable: Observable): void;
}