import TaxItem from "./TaxItem";

export default class Beer extends TaxItem {
    BEER_TAX = 5;

    constructor(description: string, price: number) {
        super("Beer", description, price);
    }

    getTax(): number {
        return this.BEER_TAX;
    }

}