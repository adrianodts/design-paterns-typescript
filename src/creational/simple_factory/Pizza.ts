export default abstract class Pizza {
  protected name: String = 'Not defined yet';

  public getName(): String {
    return this.name
  }
  
  public prepare(): void {
    console.log('Preparing pizza');
  }

  public bake() : void {
    console.log('Baking pizza');
  }

  public cut() : void {
    console.log('Cutting pizza');
  }

  public box() : void {
    console.log('Boxing pizza');
  }

}