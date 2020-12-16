import { Body, Controller, Get, Post } from '@nestjs/common';
import { CalcResult } from '../dto/calc/calc-result.dto';

@Controller('calc')
export class CalcController {
  @Post()
  res(@Body() calcControllerDto: CalcResult) {
    return calcControllerDto;
  }
  @Get()
  index() {
    return 'test';
  }
}
