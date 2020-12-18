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
    const returnedData = await this.calcService.getComputedValues(
      calcControllerDto.firstCurrency,
      calcControllerDto.secondCurrency,
      calcControllerDto.amount,
    );
    console.log(returnedData);
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Calc)
      .values([returnedData])
      .execute();

    return returnedData;
  }
  @Get()
  index() {
    return this.calcService.findAll();
  }
}
