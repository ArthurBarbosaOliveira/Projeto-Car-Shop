import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorModels from '../Models/Motor';
import Http from './http';
import Motorcycle from '../Domains/Motorcycle';

export default class MotorcycleServices {
  private createMotor(motorcycle: IMotorcycle | null): Motorcycle | Error {
    if (motorcycle) return new Motorcycle(motorcycle);
    throw new Http(404, 'Motorcycle not found');
  }
  public async post(motorcycle: IMotorcycle) {
    const model = new MotorModels();
    const check = await model.create(motorcycle);
    const newMotor = this.createMotor(check);
    return newMotor;
  }
}
