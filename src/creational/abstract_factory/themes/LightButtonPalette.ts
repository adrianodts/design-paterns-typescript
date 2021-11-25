import Button from "./Button";

export default class LightButtonPalette implements Button {
    color: string;
    backgroundColor: string;

    constructor() {
        this.color = "white";
        this.backgroundColor = "blue";
    }

}