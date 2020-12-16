import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalcController } from './calc/calc.controller';
import { CalcModule } from './calc/calc.module';

@Module({
  imports: [CalcModule],
  controllers: [AppController, CalcController],
  providers: [AppService],
})
export class AppModule {}
