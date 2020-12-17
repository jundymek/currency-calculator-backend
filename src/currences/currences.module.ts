import { HttpModule, Module } from '@nestjs/common';
import { CurrencesController } from './currences.controller';
import { CurrencesService } from './currences.service';

@Module({
  imports: [HttpModule],
  controllers: [CurrencesController],
  providers: [CurrencesService],
})
export class CurrencesModule {}
