export abstract class Vechile {
  protected vechileType: string;
  protected year: number;
  protected price: number;
  protected tax: number;
  protected seat: number;

  constructor(vechileType: string, year: number, price: number, tax: number, seat: number){
    this.vechileType = vechileType;
    this.year = year;
    this.price = price;
    this.tax = tax;
    this.seat = seat;
  }

  setVechileType(vechileType: string): void{
    this.vechileType = vechileType;
  }

  getVechileType(): string{
    return this.vechileType;
  }

  setYear(year: number): void{
    this.year = year;
  }

  getYear(): void{
    console.log(this.year);
  }

  setPrice(price: number): void{
    this.price = price;
  }

  getPrice(): void{
    console.log(this.price);
  }

  setTax(tax: number): void{
    this.tax = tax;
  }

  getTax(): void{
    console.log(this.tax);
  }

  setSeat(seat: number): void{
    this.seat = seat;
  }

  getSeat(): void{
    console.log(this.seat);
  }
}