import DisplayElement from './DisplayElement';
import Observer from './Observer';
import Subject from './Subject';

export default class StatisticsDisplay implements Observer, DisplayElement {
  
  private temperature: number = 0;
  private weatherDate: Subject;

  constructor(weatherDate: Subject) {
    this.weatherDate = weatherDate;
    this.weatherDate.registerObserver(this);
  }

  public display(): void {
    console.log(`Current Statistics: ${this.temperature} F degrees all day long.`);
  }

  public update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.display();
  }
}