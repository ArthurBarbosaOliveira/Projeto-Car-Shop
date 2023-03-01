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
}
