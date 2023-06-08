import { Vechile } from "./Parent";
import { Car, Plane } from "./Child";

export abstract class Income {
  protected vechile: Vechile;
  protected transactionDate: string;
  protected total: number;

  constructor(vechile: Vechile, transactionDate: string, total: number) {
    this.vechile = vechile;
    this.transactionDate = transactionDate;
    this.total = total;
  }

  setTransactionDate(transactionDate: string): void {
    this.transactionDate = transactionDate
  }

  getTransactionDate(): string {
    return this.transactionDate;
  }

  getType(): string {
    return this.vechile.getVechileType();
  }

  getTotal(): number {
    return this.total;
  }
}

export class IncomeRent extends Income {
  private rent: number;
  private driverPay: number;

  constructor(vechile: Vechile, transactionDate: string, rent: number, driverPay: number) {
    super(vechile, transactionDate, (rent + driverPay));
    this.rent = rent;
    this.driverPay = driverPay;
  }

  setRent(rent: number): void {
    this.rent = rent;
  }

  getRent(): number {
    return this.rent;
  }

  setDriverPay(driverPay: number): void {
    this.driverPay = driverPay;
  }

  getDriverPay(): number {
    return this.driverPay;
  }
}

export class IncomeTaxi extends Income {
  private order: number;
  private orderPerKm: number;

  constructor(vechile: Vechile, transactionDate: string, order: number, orderPerKm: number) {
    super(vechile, transactionDate, (order * orderPerKm));
    this.order = order;
    this.orderPerKm = orderPerKm;
  }

  setOrder(order: number): void {
    this.order = order;
  }

  getOrder(): number {
    return this.order;
  }

  setOrderPerKm(orderPerKm: number): void {
    this.orderPerKm = orderPerKm;
  }

  getOrderPerKm(): number {
    return this.orderPerKm;
  }
}