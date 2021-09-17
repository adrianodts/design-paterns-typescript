"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AirportTicketCalculator_1 = __importDefault(require("./AirportTicketCalculator"));
const BeachTicketCalculator_1 = __importDefault(require("./BeachTicketCalculator"));
const ParkingLot_1 = __importDefault(require("./ParkingLot"));
const ShoppingTicketCalculator_1 = __importDefault(require("./ShoppingTicketCalculator"));
test('should calculate ticket price of parking for 3 hours on the beach', () => {
    const beachTicketCalculator = new BeachTicketCalculator_1.default();
    const parkingLot = new ParkingLot_1.default(beachTicketCalculator);
    parkingLot.checkin('ABC-1234', new Date('2021-01-01T10:00:00'));
    const price = parkingLot.checkout('ABC-1234', new Date('2021-01-01T13:00:00'));
    expect(price.amount).toBe(15);
});
test('should calculate ticket price of parking for 10 hours on the airport', () => {
    const airportTicketCalculator = new AirportTicketCalculator_1.default();
    const parkingLot = new ParkingLot_1.default(airportTicketCalculator);
    parkingLot.checkin('ABC-1234', new Date('2021-01-01T10:00:00'));
    const price = parkingLot.checkout('ABC-1234', new Date('2021-01-01T20:00:00'));
    expect(price.amount).toBe(31);
});
test('should calculate ticket price of parking for 2 hours on the shopping in launch time', () => {
    const shoppingTicketCalculator = new ShoppingTicketCalculator_1.default();
    const parkingLot = new ParkingLot_1.default(shoppingTicketCalculator);
    parkingLot.checkin('ABC-1234', new Date('2021-01-01T12:00:00'));
    const price = parkingLot.checkout('ABC-1234', new Date('2021-01-01T14:00:00'));
    expect(price.amount).toBe(0);
});
