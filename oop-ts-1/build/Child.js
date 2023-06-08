"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plane = exports.Car = void 0;
const Parent_1 = require("./Parent");
class Car extends Parent_1.Vechile {
    constructor(vechileType, year, price, tax, seat, noPolice) {
        super(vechileType, year, price, tax, seat);
        this.noPolice = noPolice;
    }
    setNoPolice(noPolice) {
        this.noPolice = noPolice;
    }
    getNoPolice() {
        console.log(this.noPolice);
    }
}
exports.Car = Car;
class Plane extends Parent_1.Vechile {
    constructor(vechileType, year, price, tax, seat, noRegister) {
        super(vechileType, year, price, tax, seat);
        this.noRegister = noRegister;
    }
    setNoRegister(noRegister) {
        this.noRegister = noRegister;
    }
    getNoRegister() {
        console.log(this.noRegister);
    }
}
exports.Plane = Plane;
