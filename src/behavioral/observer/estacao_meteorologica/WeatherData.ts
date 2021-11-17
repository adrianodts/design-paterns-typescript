import Observer from './Observer';
import Subject from './Subject';

export default class WeatherData implements Subject {

  private observers : Observer[];
  private temperature: number;
  private humidity: number;
  private pressure: number;

  constructor() {
    this.observers = [];
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const position = this.observers.indexOf(observer);
    this.observers.splice(position, 1);
  }

  notifyObservers(): void {
    this.observers.forEach(observer => {
      observer.update(this.temperature, this.humidity, this.pressure);
    })
  }

  public measurementsChanged(): void {
    this.notifyObservers();
  }

  public setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }

  public getTemperature(): number {
    return this.temperature;
  }

  public getHumidity(): number {
    return this.humidity;
  }

  public getPressure(): number {
    return this.pressure;
  }

}