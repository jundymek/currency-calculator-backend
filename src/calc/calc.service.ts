import { HttpService, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { map } from 'rxjs/operators';
import { Repository } from 'typeorm';
import { Calc } from './calc.entity';

@Injectable()
export class CalcService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(Calc)
    private calcRepository: Repository<Calc>,
  ) {}

  findAll(): Promise<Calc[]> {
    return this.calcRepository.find();
  }

  getComputedValues(a, b, amount) {
    console.log(amount);
    if (amount <= 0) {
      throw new Error('Liczba musi być dodatnia');
    }
    return this.httpService
      .get(
        `https://free.currconv.com/api/v7/convert?q=${a}_${b},${b}_${a}&compact=ultra&apiKey=${process.env.API_KEY}`,
      )
      .pipe(
        map((res) => {
          const data = res.data;
          data['result'] = data[`${a}_${b}`] * amount;
          return data;
        }),
      );
  }
}
