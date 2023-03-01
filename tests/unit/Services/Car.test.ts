import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import { req, res, message, error } from '../mocks/index';
import CarService from '../../../src/Services/carService';

describe('Teste da feature Car', function () {
  afterEach(function () { sinon.restore(); });
  it('Validando se é possível criar um carro', async function () {
    sinon.stub(Model, 'create').resolves(res);
    const service = new CarService();
    const result = await service.post(req);
    expect(result).to.be.deep.equal(res);
  });
  it('Validando se é possível retornar todos os carros', async function () {
    sinon.stub(Model, 'find').resolves([res]);
    const service = new CarService();
    const result = await service.getCar();
    expect(result).to.be.deep.equal([res]);
  });
  it('Validando se é possível retornar apenas um carro', async function () {
    sinon.stub(Model, 'findById').resolves(res);
    const service = new CarService();
    const result = await service.getCarId(res.id as string);
    expect(result).to.be.deep.equal(res);
  });
  it('Validando se é possível retornar um erro em um carro inexistente', async function () {
    sinon.stub(Model, 'findById').resolves(message);
    const service = new CarService();
    const result = await service.getCarId(error);
    expect(result).to.be.deep.equal(message);
  });
  it('Validando que não é possível alterar um carro que não existe', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(res);
    const service = new CarService();
    const result = await service.update(res.id as string, req);
    expect(result).to.be.deep.equal(res);
  });
});
