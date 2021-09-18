import AbstractFactory from "./AbstractFactory";
import LightButtonPalette from "./LightButtonPalette";
import LightLabelPalette from "./LightLabelPalette";

export default class View {
    label: LightLabelPalette;
    button: LightButtonPalette;

    constructor(themeFactory: AbstractFactory) {
        this.label = themeFactory.createLabel();
        this.button = themeFactory.createButton();
    }

}