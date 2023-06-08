import { Vechile } from "./Parent";

export class Car extends Vechile {
  private noPolice: string;

  constructor(vechileType: string, year: number, price: number, tax: number, seat: number, noPolice: string){
    super(vechileType, year, price, tax, seat);
    this.noPolice = noPolice;
  }

  setNoPolice(noPolice: string):void {
    this.noPolice = noPolice;
  }

  getNoPolice():void {
    console.log(this.noPolice);
  }
}

export class Plane extends Vechile {
  private noRegister: string;

  constructor(vechileType: string, year: number, price: number, tax: number, seat: number, noRegister: string){
    super(vechileType, year, price, tax, seat);
    this.noRegister = noRegister;
  }

  setNoRegister(noRegister: string):void {
    this.noRegister = noRegister;
  }

  getNoRegister():void {
    console.log(this.noRegister);
  }
}