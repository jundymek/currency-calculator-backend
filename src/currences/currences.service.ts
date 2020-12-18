import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class CurrencesService {
  constructor(private httpService: HttpService) {}

  getCurrences() {
    return this.httpService
      .get(
        `https://free.currconv.com/api/v7/currencies?apiKey=${process.env.API_KEY}`,
      )
      .pipe(
        map((res) =>
          Object.keys(res.data.results).map((key) => {
            const currency = {};
            currency['symbol'] = key;
            currency['name'] = res.data.results[key]['currencyName'];
            return currency;
          }),
        ),
      );
  }
}
