"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vechile = void 0;
class Vechile {
    constructor(vechileType, year, price, tax, seat) {
        this.vechileType = vechileType;
        this.year = year;
        this.price = price;
        this.tax = tax;
        this.seat = seat;
    }
    setVechileType(vechileType) {
        this.vechileType = vechileType;
    }
    getVechileType() {
        return this.vechileType;
    }
    setYear(year) {
        this.year = year;
    }
    getYear() {
        console.log(this.year);
    }
    setPrice(price) {
        this.price = price;
    }
    getPrice() {
        console.log(this.price);
    }
    setTax(tax) {
        this.tax = tax;
    }
    getTax() {
        console.log(this.tax);
    }
    setSeat(seat) {
        this.seat = seat;
    }
    getSeat() {
        console.log(this.seat);
    }
}
exports.Vechile = Vechile;
