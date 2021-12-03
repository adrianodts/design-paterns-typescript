export default abstract class Report {

    protected header = `This is a default report header`;
    protected body = `This is a default report body`
    protected footer = `This is a default report footer`;

    protected mountReport() {
      this.mountHeader();
      this.mountBody();
      this.mountFooter();
    }

    protected mountHeader(): void {
      this.header = `This is a default report header`;
    }

    protected abstract mountBody(): void;

    protected mountFooter(): void {
      this.footer = `This is a default report footer`;
    }

    getHeader(): String {
      return this.header;
    }
    getBody(): String {
      return this.body;
    }
    getFooter(): String {
      return this.footer;
    }
}