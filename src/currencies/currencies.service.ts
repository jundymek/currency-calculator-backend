import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

export interface Currency {
  symbol: string;
  name: string;
}

@Injectable()
export class currenciesService {
  constructor(private httpService: HttpService) {}

  getcurrencies() {
    return this.httpService
      .get(
        `https://free.currconv.com/api/v7/currencies?apiKey=${process.env.API_KEY}`,
      )
      .pipe(
        map((res) =>
          Object.keys(res.data.results).map((key):
            | Currency
            | Record<string, never> => {
            const currency = {};
            currency['symbol'] = key;
            currency['name'] = res.data.results[key]['currencyName'];
            return currency;
          }),
        ),
      );
  }
}
