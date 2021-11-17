import DisplayElement from './DisplayElement';
import Observer from './Observer';
import Subject from './Subject';

export default class ForecastDisplay implements Observer, DisplayElement {
  
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;
  private weatherDate: Subject;

  constructor(weatherDate: Subject) {
    this.weatherDate = weatherDate;
    this.weatherDate.registerObserver(this);
  }

  public display(): void {
    console.log(`Current Forecast: ${this.temperature} F degrees, humidity ${this.humidity} and pressure ${this.pressure}`);
    this.weatherDate.removeObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

}