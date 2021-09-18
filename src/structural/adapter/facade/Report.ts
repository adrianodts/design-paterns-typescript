import ReportBody from "./ReportBody";
import ReportFooter from "./ReportFooter";
import ReportHeader from "./ReportHeader";

export default class Report {
    header: ReportHeader | undefined;
    body: ReportBody | undefined;
    footer: ReportFooter | undefined;

    constructor() {

    }

    setheader(header: ReportHeader): void {
        this.header = header;
    }

    setBody(body: ReportBody) : void {
        this.body = body;
    }

    setFooter(footer: ReportFooter) : void {
        this.footer = footer;
    }

    generate() : string {
        const html = `<div>${this.header?.value}</div><div>${this.body  ?.value}</div><div>${this.footer?.value}</div>`
        return html;
    }
}