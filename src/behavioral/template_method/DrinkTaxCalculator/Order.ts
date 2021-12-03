import Item from "./Item";
import TaxItem from "./TaxItem";
import Water from "./Water";

export default class Order {
    items: Item[];

    constructor() {
        this.items = [];
    }

    addItem(item: Item): void {
        this.items.push(item);
    }

    /**
     * 
     * O problema é que se entrar mais categorias, o código tende a crescer e a classe 
     * pode mudar por motivos diferentes ao seu propósito. Ferindo o OCP - Open/Closed Principle.
     * Pode-se contornar essa situacao utilizando o padrao template method.
     * 
     *            
            if (item.category === "Beer") {
                tax = 5;   
            }
            if (item.category === "Whisky") {
                tax = 10;
            }
            if (item.category === "Water") {
                tax = 0;
            }
            total += (item.price * tax) / 100;
            
     */
    getTaxes(): number {
        let total = 0;
        let tax = 0;
        for (const item of this.items) {
           if (item instanceof TaxItem) {
               total += item.calculateTax();
           }
        }
        return total;
    }
}