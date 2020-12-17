import { Test, TestingModule } from '@nestjs/testing';
import { CurrencesService } from './currences.service';

describe('CurrencesService', () => {
  let service: CurrencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencesService],
    }).compile();

    service = module.get<CurrencesService>(CurrencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
