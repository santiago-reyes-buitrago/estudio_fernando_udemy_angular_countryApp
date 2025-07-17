import {Component, inject, signal} from '@angular/core';
import {CountrySearchInput} from '../../components/country-search-input/country-search-input';
import {CountryList} from '../../components/country-list/country-list';
import {CountryService} from '../../services/country.service';
import {rxResource} from '@angular/core/rxjs-interop';
import {of} from 'rxjs';

@Component({
  selector: 'by-capital-page',
  imports: [
    CountrySearchInput,
    CountryList
  ],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css'
})
export class ByCapitalPage {
  protected query = signal<string>('')

  private countryService = inject(CountryService)
  protected countryResource =  rxResource({
    params: () => ({
      query: this.query()
    }),
    stream: ({params}) => {
      if (!params.query) return of([]);
      return this.countryService.searchByCapital(params.query)
    }
  })
  // protected countryResource =  resource({
  //   params: () => ({
  //     query: this.query()
  //   }),
  //   loader: async({params}) => {
  //     if (!params.query) return [];
  //     return await firstValueFrom(this.countryService.searchByCapital(params.query))
  //   }
  // })
}
