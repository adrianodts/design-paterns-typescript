export default abstract class Beverage {
  protected description: String = "Not defined yet";

  public getDescription(): String {
    return this.description;
  }

  public abstract cost(): number;
}