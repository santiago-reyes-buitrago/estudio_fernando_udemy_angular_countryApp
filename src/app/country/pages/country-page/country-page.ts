import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {rxResource} from '@angular/core/rxjs-interop';
import {CountryService} from '../../services/country.service';
import {Error} from '../../../shared/components/error/error';

@Component({
  selector: 'country-page',
  imports: [
    Error
  ],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css'
})
export class CountryPage {
  countryCode = inject(ActivatedRoute).snapshot.params['code'];
  countryService = inject(CountryService);

  countryResource = rxResource({
    params: () => ({
      code: this.countryCode
    }),
    stream: ({params}) => {
      return this.countryService.searchCountryByAlphaCode(params.code)
    }
  })
}
