import { Test, TestingModule } from '@nestjs/testing';
import { CurrencesController } from './currences.controller';

describe('CurrencesController', () => {
  let controller: CurrencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrencesController],
    }).compile();

    controller = module.get<CurrencesController>(CurrencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
