import Report from "./Report";
import ReportBody from "./ReportBody";
import ReportFooter from "./ReportFooter";
import ReportHeader from "./ReportHeader";

export default class ReportFacade {
    
    report: Report;

    constructor(header: string, body: string, footer: string) {
        const report = new Report();
        report.setheader(new ReportHeader(header));
        report.setBody(new ReportBody(body));
        report.setFooter(new ReportFooter(footer));
        this.report = report;
    }

    generate() : string {
        return this.report.generate();
    }
}