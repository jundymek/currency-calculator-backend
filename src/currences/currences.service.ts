import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class CurrencesService {
  constructor(private httpService: HttpService) {}

  getCurrences() {
    return this.httpService
      .get('http://api.nbp.pl/api/exchangerates/tables/C/?format=json')
      .pipe(
        map((res) => {
          const data = res.data[0].rates;
          const currences = data.map((item) => item.code);
          return [...currences, 'PLN'];
        }),
      );
  }
}
