"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AirportParking {
    calculate(checkinDate, checkoutDate) {
        const period = (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60);
        let amount = 10;
        const remainingHours = period - 3;
        if (remainingHours > 0) {
            amount += remainingHours * 3;
        }
        return amount;
    }
}
exports.default = AirportParking;
