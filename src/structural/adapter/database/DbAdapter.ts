export default interface DbAdapter {
  insert(): void;
  update(): void;
  delete(): void;
}