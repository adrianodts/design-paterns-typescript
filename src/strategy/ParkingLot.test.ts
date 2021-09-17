import AirportTicketCalculator from "./AirportTicketCalculator";
import BeachTicketCalculator from "./BeachTicketCalculator";
import ParkingLot from "./ParkingLot";
import ShoppingTicketCalculator from "./ShoppingTicketCalculator";

test('should calculate ticket price of parking for 3 hours on the beach', () => {
    const beachTicketCalculator = new BeachTicketCalculator();
    const parkingLot = new ParkingLot(beachTicketCalculator);
    parkingLot.checkin('ABC-1234', new Date('2021-01-01T10:00:00'));
    const price = parkingLot.checkout('ABC-1234', new Date('2021-01-01T13:00:00'));
    expect(price.amount).toBe(15);
})

test('should calculate ticket price of parking for 10 hours on the airport', () => {
    const airportTicketCalculator = new AirportTicketCalculator();
    const parkingLot = new ParkingLot(airportTicketCalculator);
    parkingLot.checkin('ABC-1234', new Date('2021-01-01T10:00:00'));
    const price = parkingLot.checkout('ABC-1234', new Date('2021-01-01T20:00:00'));
    expect(price.amount).toBe(31);
})
test('should calculate ticket price of parking for 2 hours on the shopping in launch time', () => {
    const shoppingTicketCalculator = new ShoppingTicketCalculator();
    const parkingLot = new ParkingLot(shoppingTicketCalculator);
    parkingLot.checkin('ABC-1234', new Date('2021-01-01T12:00:00'));
    const price = parkingLot.checkout('ABC-1234', new Date('2021-01-01T14:00:00'));
    expect(price.amount).toBe(0);
})