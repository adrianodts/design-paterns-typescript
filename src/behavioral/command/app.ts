import Light from './Light';
import LightOffCommand from './LightOffCommand';
import LightOnCommand from './LightOnCommand';
import SmartRemoteControl from './SmartRemoteControl';

// Receiver
const lightOn = new Light();
const lightOff = new Light();

// Concrete commands
const lightOnCommand = new LightOnCommand(lightOn); 
const lightOffCommand = new LightOffCommand(lightOff);

// Invoker
const smartRemoteControl = new SmartRemoteControl();
smartRemoteControl.setCommand(0, lightOnCommand, lightOffCommand);
smartRemoteControl.onButtonWasPushed(0);
smartRemoteControl.offButtonWasPushed(0);

smartRemoteControl.setCommand(1, lightOnCommand, lightOffCommand);
smartRemoteControl.onButtonWasPushed(1);
smartRemoteControl.undoOnButtonWasPushed(1);
smartRemoteControl.offButtonWasPushed(1);
smartRemoteControl.undoOffButtonWasPushed(1);

