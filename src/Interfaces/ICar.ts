import IVehicle from './IVehicle';

export default interface ICar extends IVehicle {
  doorsQty: number,
  seatsQty: number,
}
export interface IMessage {
  id: undefined,
  model: undefined,
  year: undefined,
  color: undefined,
  status: undefined,
  buyValue: undefined,
  doorsQty: undefined,
  seatsQty: undefined,
}
