import SmartHouseCommand from './SmartHouseCommand';

export default class SmartRemoteControl {

  private onCommands: SmartHouseCommand[] = [];
  private offCommands: SmartHouseCommand[] = [];
  
  setCommand(slot: number, onCommand: SmartHouseCommand, offCommand: SmartHouseCommand): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonWasPushed(slot: number): void {
    this.onCommands[slot].execute();
  }
  
  offButtonWasPushed(slot: number): void {
    this.offCommands[slot].execute();
  }

  undoOnButtonWasPushed(slot: number): void {
    this.onCommands[slot].undo();
  }

  undoOffButtonWasPushed(slot: number): void {
    this.offCommands[slot].undo();
  }
}