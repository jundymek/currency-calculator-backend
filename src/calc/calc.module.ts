import { HttpModule, Module } from '@nestjs/common';
import { CalcController } from './calc.controller';
import { CalcService } from './calc.service';

@Module({
  imports: [HttpModule],
  controllers: [CalcController],
  providers: [CalcService],
})
export class CalcModule {}
