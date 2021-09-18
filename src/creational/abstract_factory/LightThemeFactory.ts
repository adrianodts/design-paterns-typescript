import AbstractFactory from "./AbstractFactory";
import Button from "./Button";
import Label from "./Label";
import LightButtonPalette from "./LightButtonPalette";
import LightLabelPalette from "./LightLabelPalette";

export default class LightThemeFactory implements AbstractFactory {

    createLabel(): Label {
        return new LightLabelPalette();
    }
    createButton(): Button {
        return new LightButtonPalette();
    }

}