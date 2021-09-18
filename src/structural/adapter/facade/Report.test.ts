import ReportFacade from "./ReportFacade";

test("Should generate a report", () => {
    const reportFacade = new ReportFacade("Header", "Body", "Footer");
    const html = reportFacade.generate();
    expect(html).toBe("<div>Header</div><div>Body</div><div>Footer</div>");
})