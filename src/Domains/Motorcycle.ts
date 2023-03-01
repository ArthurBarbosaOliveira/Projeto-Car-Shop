import IMotorcycle from '../Interfaces/IMotorcycle';
import Veiculo from './Vehicle';

export default class Motorcycle extends Veiculo {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }
  public getCategory() {
    return this.category;
  }
  public setCategory(category: string) {
    this.category = category;
  }
  public getEngineCapacity() {
    return this.engineCapacity;
  }
  public setEngineCapacity(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }
}
