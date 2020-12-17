import { Body, Controller, Get, Post } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { CalcDto } from '../dto/calc/calc-result.dto';
import { Calc } from './calc.entity';
import { CalcService } from './calc.service';

@Controller('calc')
export class CalcController {
  constructor(private calcService: CalcService) {}
  @Post()
  async res(@Body() calcControllerDto: CalcDto) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Calc)
      .values([
        {
          firstCurrency: calcControllerDto.firstCurrency,
          secondCurrency: calcControllerDto.secondCurrency,
          amount: calcControllerDto.amount,
        },
      ])
      .execute();

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
