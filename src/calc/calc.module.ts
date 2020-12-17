import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalcController } from './calc.controller';
import { Calc } from './calc.entity';
import { CalcService } from './calc.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Calc])],
  controllers: [CalcController],
  providers: [CalcService],
})
export class CalcModule {}
