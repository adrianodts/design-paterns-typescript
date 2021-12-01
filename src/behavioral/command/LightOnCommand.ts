import Light from './Light';
import SmartHouseCommand from './SmartHouseCommand';

export default class LightOnCommand implements SmartHouseCommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }

}