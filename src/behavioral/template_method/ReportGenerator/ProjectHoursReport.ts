import Report from './Report';

export default class ProjectHoursReport extends Report {

  private static reportName = "Project Hours Report";

  constructor() {
    super();
  }

  protected override mountHeader(): void {
    this.header = `This is a ${ProjectHoursReport.reportName} header`
  }

  protected mountBody(): void {
    this.body = `This is a ${ProjectHoursReport.reportName} body`;
  }

  public generateReport(): void {
    super.mountReport();
  }
}