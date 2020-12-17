import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class CalcService {
  constructor(private httpService: HttpService) {}

  getComputedValues(a, b, amount) {
    console.log(amount);
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
