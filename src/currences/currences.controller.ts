import { Controller, Get } from '@nestjs/common';
import { CurrencesService } from './currences.service';

@Controller('currences')
export class CurrencesController {
  constructor(private currencesService: CurrencesService) {}
  @Get()
  getCurrences(): any {
    return this.currencesService.getCurrences();
  }
}
