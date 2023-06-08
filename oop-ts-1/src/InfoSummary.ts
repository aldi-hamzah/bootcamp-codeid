// import { Vechile } from "./Parent";
import { Car, Plane } from "./Child";
import { Income, IncomeRent, IncomeTaxi } from "./Income";

interface Summary {
  GetTotalVechile(type?: string): void;
  GetTotalIncomeVechile(type?: string): void;
}

class InfoSummary implements Summary {
  private income: Income[];

  constructor(income: Income[]) {
    this.income = income;
  }

  GetTotalVechile(type?: string): void {
    let totalVechile: number = 0;
    this.income.forEach(i => {
      if (type !== undefined && type === i.getType()) {
        totalVechile++;
      } else if (type === undefined) {
        totalVechile++;
      }
    });
    console.log(totalVechile);
  }

  GetTotalIncomeVechile(type?: string): void {
    let totalIncome: number = 0;
    this.income.forEach(i => {
      if (type !== undefined && type === i.getType()) {
        totalIncome += i.getTotal();
      } else if (type === undefined) {
        totalIncome += i.getTotal();
      }
    });

    console.log(new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(totalIncome));
  }

}

const suv1 = new Car("SUV", 2010, 350000000, 3500000, 4, "D 1001 UM");
const incomeSuv1 = new IncomeRent(suv1, "2022-01-10", 500000, 150000);

const suv2 = new Car("SUV", 2010, 350000000, 3500000, 4, "D 1002 UM");
const incomeSuv2 = new IncomeRent(suv2, "2022-01-10", 500000, 150000);

const suv3 = new Car("SUV", 2015, 350000000, 3500000, 4, "D 1003 UM");
const incomeSuv3 = new IncomeRent(suv3, "2022-01-12", 500000, 150000);

const suv4 = new Car("SUV", 2015, 350000000, 3500000, 4, "D 1004 UM");
const incomeSuv4 = new IncomeRent(suv4, "2022-01-13", 500000, 150000);

const taxi1 = new Car("Taxi", 2002, 175000000, 1750000, 4, "D 11 UK");
const incomeTaxi1 = new IncomeTaxi(taxi1, "2022-01-12", 45, 4500);

const taxi2 = new Car("Taxi", 2015, 225000000, 2250000, 4, "D 12 UK");
const incomeTaxi2 = new IncomeTaxi(taxi2, "2022-01-13", 75, 4500);

const taxi3 = new Car("Taxi", 2020, 275000000, 2750000, 4, "D 13 UK");
const incomeTaxi3 = new IncomeTaxi(taxi3, "2022-01-13", 90, 4500);

const privateJet1 = new Plane("PrivateJet", 2015, 150000000000, 1500000000, 12, "ID8089");
const incomePrivateJet1 = new IncomeRent(privateJet1, "2022-12-23", 35000000, 15000000);

const privateJet2 = new Plane("PrivateJet", 2018, 175000000000, 1750000000, 15, "ID8099");
const incomePrivateJet2 = new IncomeRent(privateJet2, "2022-12-23", 55000000, 25000000);

const income = [
  incomeSuv1,
  incomeSuv2,
  incomeSuv3,
  incomeSuv4,
  incomeTaxi1,
  incomeTaxi2,
  incomeTaxi3,
  incomePrivateJet1,
  incomePrivateJet2
];

const infoSummary = new InfoSummary(income);

infoSummary.GetTotalVechile();
infoSummary.GetTotalVechile("SUV");
infoSummary.GetTotalIncomeVechile("SUV");
infoSummary.GetTotalIncomeVechile("Taxi");
infoSummary.GetTotalIncomeVechile("PrivateJet");
infoSummary.GetTotalIncomeVechile();

