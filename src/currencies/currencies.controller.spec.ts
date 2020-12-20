import { Test, TestingModule } from '@nestjs/testing';
import { currenciesController } from './currencies.controller';

describe('currenciesController', () => {
  let controller: currenciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [currenciesController],
    }).compile();

    controller = module.get<currenciesController>(currenciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
