import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalcModule } from './calc/calc.module';
import { CurrencesModule } from './currences/currences.module';

@Module({
  imports: [CalcModule, CurrencesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
