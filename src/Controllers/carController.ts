import { NextFunction, Request, Response } from 'express';
import Car from '../Interfaces/ICar';
import CarService from '../Services/carService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async postCar() {
    const car: Car = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const check = await this.service.post(car);
      return this.res.status(201)
        .json(check);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCar() {
    try {
      const result = await this.service.getCar();
      return this.res.status(200)
        .json(result);
    } catch (error) {
      this.next(error);
    }
  }
  public async getCarId() {
    const { id } = this.req.params;
    try {
      const result = await this.service.getCarId(id);
      return this.res.status(200)
        .json(result);
    } catch (error) {
      this.next(error);
    }
  }
  public async update() {
    const { id } = this.req.params;
    const reqBody = this.req.body;
    try {
      const result = await this.service.update(id, reqBody);
      return this.res.status(200)
        .json(result);
    } catch (error) {
      this.next(error);
    }
  }
}
