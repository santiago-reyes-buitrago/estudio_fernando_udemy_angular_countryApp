import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
  styleUrl: './country-search-input.css'
})
export class CountrySearchInput {
  @Output() handleSearch = new EventEmitter<string>();
  onSearch(value: string) {
    this.handleSearch.emit(value);
  }
}
