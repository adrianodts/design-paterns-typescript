import Light from './Light';
import SmartHouseCommand from './SmartHouseCommand';

export default class LightOffCommand implements SmartHouseCommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.off();
  }

  undo(): void {
    this.light.on();
  }

}