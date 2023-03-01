import CarModels from '../Models/Car';
import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import Http from './http';

export default class CarServices {
  private create(car: ICar | null): Car | Error {
    if (car) return new Car(car);
    throw new Http(404, 'Car not found');
  }

  public async post(car: ICar) {
    const carODM = new CarModels();
    const result = await carODM.create(car);
    return this.create(result);
  }
}
