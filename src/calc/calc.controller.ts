import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalcDto } from '../dto/calc/calc-result.dto';
import { CalcService } from './calc.service';

@Controller('calc')
export class CalcController {
  constructor(private calcService: CalcService) {}
  @Post()
  res(@Body() calcControllerDto: CalcDto) {
    return this.calcService.getComputedValues(
      calcControllerDto.firstCurrency,
      calcControllerDto.secondCurrency,
      calcControllerDto.amount,
    );
  }
  @Get()
  index() {
    return this.calcService.findAll();
    // return 'test';
  }
}
