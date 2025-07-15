import { Component } from '@angular/core';
import {CountryList} from '../../components/country-list/country-list';
import {CountrySearchInput} from '../../components/country-search-input/country-search-input';

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

  onSearch($event: string) {
    console.log($event);
  }
}
