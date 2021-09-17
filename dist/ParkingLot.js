"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParkingLot {
    constructor(ticketCalculator) {
        this.tickets = [];
        this.ticketCalculator = ticketCalculator;
    }
    checkin(plate, checkinDate) {
        this.tickets.push({ plate, checkinDate });
    }
    checkout(plate, checkoutDate) {
        const ticket = this.tickets.find(ticket => ticket.plate === plate);
        if (!ticket)
            throw new Error('Ticket not found!');
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
exports.default = ParkingLot;
