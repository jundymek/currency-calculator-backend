import { Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { currenciesService } from './currencies.service';
import { Currency } from './currencies.service';

@Controller('currencies')
export class currenciesController {
  constructor(private currenciesService: currenciesService) {}
  @Get()
  getcurrencies(): Observable<(Record<string, never> | Currency)[]> {
    return this.currenciesService.getcurrencies();
  }
}
