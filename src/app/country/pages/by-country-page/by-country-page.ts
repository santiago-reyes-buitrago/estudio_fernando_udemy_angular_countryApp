import {Component, inject, resource, signal} from '@angular/core';
import {CountryList} from '../../components/country-list/country-list';
import {CountrySearchInput} from '../../components/country-search-input/country-search-input';
import {CountryService} from '../../services/country.service';
import {firstValueFrom, of} from 'rxjs';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'by-country-page',
  imports: [
    CountryList,
    CountrySearchInput
  ],
  templateUrl: './by-country-page.html',
  styleUrl: './by-country-page.css'
})
export class ByCountryPage {

  protected query = signal<string>('')

  private countryService = inject(CountryService)
  protected countryResource =  rxResource({
    params: () => ({
      query: this.query()
    }),
    stream: ({params}) => {
      if (!params.query) return of([]);
      return this.countryService.searchByCountry(params.query)
    }
  })
  // protected countryResource =  resource({
  //   params: () => ({
  //     query: this.query()
  //   }),
  //   loader: async({params}) => {
  //     if (!params.query) return [];
  //     return await firstValueFrom(this.countryService.searchByCountry(params.query))
  //   }
  // })
}
