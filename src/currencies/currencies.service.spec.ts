import { Test, TestingModule } from '@nestjs/testing';
import { currenciesService } from './currencies.service';

describe('currenciesService', () => {
  let service: currenciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [currenciesService],
    }).compile();

    service = module.get<currenciesService>(currenciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
