import DarkThemeFactory from "./DartThemeFactory";
import LightThemeFactory from "./LightThemeFactory";
import View from "./View";

test("Should create a graphical interface light themme", () => {
    const view = new View(new LightThemeFactory());
    expect(view.label.color).toBe("black");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("blue");
});

test("Should create a graphical interface dark themme", () => {
    const view = new View(new DarkThemeFactory());
    expect(view.label.color).toBe("white");
    expect(view.button.color).toBe("white");
    expect(view.button.backgroundColor).toBe("black");
});