import Report from './Report';

export default class ProjectBudgetReport extends Report {
  
  private static reportName = "Project Budget Report";

  constructor() {
    super();
  }
  
  protected mountBody(): void {
    this.body = `This is a ${ProjectBudgetReport.reportName} body`;
  }
  
  protected override mountFooter(): void {
    this.footer = `This is a ${ProjectBudgetReport.reportName} footer`
  }

  public generateReport(): void {
    super.mountReport();
  }
}