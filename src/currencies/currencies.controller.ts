import { Controller, Get } from '@nestjs/common';
import { currenciesService } from './currencies.service';

@Controller('currencies')
export class currenciesController {
  constructor(private currenciesService: currenciesService) {}
  @Get()
  getcurrencies(): any {
    return this.currenciesService.getcurrencies();
  }
}
