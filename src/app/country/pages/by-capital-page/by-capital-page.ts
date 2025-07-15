import {Component, signal} from '@angular/core';
import {CountrySearchInput} from '../../components/country-search-input/country-search-input';
import {CountryList} from '../../components/country-list/country-list';

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
  infoCountry = signal<string[]>([])
  onSearch(value: string) {
    console.log(value);
  }
}
