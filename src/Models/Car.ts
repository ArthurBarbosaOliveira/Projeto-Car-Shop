import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import Abstract from './AbstractODM';

export default class CarModels extends Abstract<ICar> {
  constructor() {
    const carModel = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super('Car', carModel);
  }
}
