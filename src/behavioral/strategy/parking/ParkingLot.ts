import TicketCalculator from "./TicketCalculator";

export default class ParkingLot {
    tickets: { plate: string, checkinDate: Date }[];
    ticketCalculator: TicketCalculator;

    constructor(ticketCalculator: TicketCalculator) {
        this.tickets = [];
        this.ticketCalculator = ticketCalculator;
    }

    checkin(plate: string, checkinDate: Date) {
        this.tickets.push({ plate, checkinDate });
    }

    checkout(plate: string, checkoutDate: Date) {
        const ticket = this.tickets.find(ticket => ticket.plate === plate);
        if(!ticket) throw new Error('Ticket not found!');
        
        // before applying patern
        /*
        const period = (checkoutDate.getTime() - ticket.checkinDate.getTime())/(1000*60*60);
        let amount = 0;
        if (this.ticketCalculator === 'beach') {
            amount = 5;
            amount *= period;
        }
        if (this.ticketCalculator === 'airport') {
            amount = 10;
            const remainingHours = period - 3;
            if (remainingHours > 0) {
                amount += remainingHours * 3;
            }
        }
        if (this.ticketCalculator === 'shopping') {
            amount = 0;
            if (ticket.checkinDate.getHours() >= 12 && checkoutDate.getHours() <= 14) {
                amount = 0;
            } else {
                amount = period * 3;
            }
        }
        */

        // after patern
        const amount = this.ticketCalculator.calculate(ticket.checkinDate, checkoutDate);

        return {
            amount
        };
    }

}