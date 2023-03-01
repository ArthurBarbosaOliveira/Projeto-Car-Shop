import ICar, { IMessage } from '../../../src/Interfaces/ICar';

export const request: ICar = {
  model: 'Nissan GTR',
  year: 2022,
  color: 'Black',
  status: false,
  buyValue: 800999,
  doorsQty: 2,
  seatsQty: 4,
};
export const response: ICar = {
  id: '63eda9f714d4cf81fca79e4b',
  model: 'Nissan GTR',
  year: 2022,
  color: 'Black',
  status: false,
  buyValue: 800999,
  doorsQty: 2,
  seatsQty: 4,
};
export const requestIdError = '63eda9f714d4ff81fca76e9b';
export const erroMessage: IMessage = {
  id: undefined,
  model: undefined,
  year: undefined,
  color: undefined,
  status: undefined,
  buyValue: undefined,
  doorsQty: undefined,
  seatsQty: undefined,
};
