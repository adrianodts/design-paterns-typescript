import ProjectHoursReport from './ProjectHoursReport';
import ProjectBudgetReport from './ProjectBudgetReport';

test("Should generate Project Hours Report", () => {
    const projectHoursReport = new ProjectHoursReport();
    projectHoursReport.generateReport();

    expect(projectHoursReport.getHeader()).toBe("This is a Project Hours Report header");
    expect(projectHoursReport.getBody()).toBe("This is a Project Hours Report body");
    expect(projectHoursReport.getFooter()).toBe("This is a default report footer");
})

test("Should generate Project Budget Report", () => {
    const projectBudgetReport = new ProjectBudgetReport();
    projectBudgetReport.generateReport();

    expect(projectBudgetReport.getHeader()).toBe("This is a default report header");
    expect(projectBudgetReport.getBody()).toBe("This is a Project Budget Report body");
    expect(projectBudgetReport.getFooter()).toBe("This is a Project Budget Report footer");
})