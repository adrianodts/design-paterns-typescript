export default interface SmartHouseCommand {
  execute(): void;
  undo(): void;
}