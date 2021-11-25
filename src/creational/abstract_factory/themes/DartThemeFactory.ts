import AbstractFactory from "./AbstractFactory";
import Button from "./Button";
import Label from "./Label";
import DarkButtonPalette from "./DarkButtonPalette";
import DarkLabelPalette from "./DarkLabelPalette";

export default class DarkThemeFactory implements AbstractFactory {

    createLabel(): Label {
        return new DarkLabelPalette();
    }
    createButton(): Button {
        return new DarkButtonPalette();
    }

}