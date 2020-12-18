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

  getComputedValues(a: string, b: string, amount: number) {
    console.log(amount);
    if (amount <= 0) {
      throw new Error('Liczba musi być dodatnia');
    }
    return this.httpService
      .get(
        `https://free.currconv.com/api/v7/convert?q=${a}_${b}&compact=ultra&apiKey=${process.env.API_KEY}`,
      )
      .pipe(
        map((res) => {
          const data = {};
          data['price'] = Object.values(res.data)[0];
          data['firstCurrency'] = a;
          data['secondCurrency'] = b;
          data['amount'] = amount;
          data['result'] = data['price'] * amount;
          data['date'] = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          });
          return data;
        }),
      )
      .toPromise();
  }
}
