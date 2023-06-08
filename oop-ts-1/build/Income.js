"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeTaxi = exports.IncomeRent = exports.Income = void 0;
class Income {
    constructor(vechile, transactionDate, total) {
        this.vechile = vechile;
        this.transactionDate = transactionDate;
        this.total = total;
    }
    setTransactionDate(transactionDate) {
        this.transactionDate = transactionDate;
    }
    getTransactionDate() {
        return this.transactionDate;
    }
    getType() {
        return this.vechile.getVechileType();
    }
    getTotal() {
        return this.total;
    }
}
exports.Income = Income;
class IncomeRent extends Income {
    constructor(vechile, transactionDate, rent, driverPay) {
        super(vechile, transactionDate, (rent + driverPay));
        this.rent = rent;
        this.driverPay = driverPay;
    }
    setRent(rent) {
        this.rent = rent;
    }
    getRent() {
        return this.rent;
    }
    setDriverPay(driverPay) {
        this.driverPay = driverPay;
    }
    getDriverPay() {
        return this.driverPay;
    }
}
exports.IncomeRent = IncomeRent;
class IncomeTaxi extends Income {
    constructor(vechile, transactionDate, order, orderPerKm) {
        super(vechile, transactionDate, (order * orderPerKm));
        this.order = order;
        this.orderPerKm = orderPerKm;
    }
    setOrder(order) {
        this.order = order;
    }
    getOrder() {
        return this.order;
    }
    setOrderPerKm(orderPerKm) {
        this.orderPerKm = orderPerKm;
    }
    getOrderPerKm() {
        return this.orderPerKm;
    }
}
exports.IncomeTaxi = IncomeTaxi;
