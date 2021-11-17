import DisplayElement from './DisplayElement';
import Observer from './Observer';
import Subject from './Subject';

export default class CurrentConditionsDisplay implements Observer, DisplayElement {
  
  private temperature: number = 0;
  private humidity: number = 0;
  private weatherDate: Subject;

  constructor(weatherDate: Subject) {
    this.weatherDate = weatherDate;
    this.weatherDate.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display(): void {
    console.log(`Current Conditions: ${this.temperature} F degrees and humidity ${this.humidity}`);
    this.weatherDate.removeObserver(this);
  }

  

}