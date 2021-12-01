export default class Light {

  private isOn: boolean = false;

  on(): void {
    this.isOn = true;
    console.log(`The light is ${this.isOn}`);
  }

  off(): void {
    this.isOn = false;
    console.log(`The light is ${this.isOn}`);
  }

}