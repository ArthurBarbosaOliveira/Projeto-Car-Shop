import { Model, models, Schema, model, isValidObjectId } from 'mongoose';
import Http from '../Services/http';

export default class AbstracODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  constructor(modelName: string, schema: Schema) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }
  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) {
      throw new Http(422, 'Invalid mongo id');
    }
    return this.model.findById(id);
  }
}
