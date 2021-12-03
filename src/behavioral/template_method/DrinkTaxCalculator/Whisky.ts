import TaxItem from "./TaxItem";

export default class Whisky extends TaxItem {
    WHISKY_TAX = 10;

    constructor(description: string, price: number) {
        super("Whisky", description, price);
    }
    
    getTax(): number {
        return this.WHISKY_TAX;
    }

}