import { HttpModule, Module } from '@nestjs/common';
import { currenciesController } from './currencies.controller';
import { currenciesService } from './currencies.service';

@Module({
  imports: [HttpModule],
  controllers: [currenciesController],
  providers: [currenciesService],
})
export class currenciesModule {}
