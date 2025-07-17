import {Component, input, output} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
  styleUrl: './country-search-input.css'
})
export class CountrySearchInput {
  placeholder = input<string>()
  handleSearch = output<string>()
  onSearch(value: string) {
    this.handleSearch.emit(value);
  }
}
