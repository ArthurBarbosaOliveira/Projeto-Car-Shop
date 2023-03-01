import Veiculo from './Veiculo';
import ICar from '../Interfaces/ICar';

export default class Car extends Veiculo {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
  public getDoorsQty() {
    return this.doorsQty;
  }
  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }
  public getSeatsQty() {
    return this.seatsQty;
  }
  public setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
}
