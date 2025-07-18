import {Component, input, signal} from '@angular/core';
import {CountryInterface} from '../../interfaces/country.interface';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [
    DecimalPipe
  ],
  templateUrl: './country-list.html',
  standalone: true,
  styleUrl: './country-list.css'
})
export class CountryList {
  list = input.required<CountryInterface[]>()
  errorMessage = input<string>()
  isLoading = input<boolean>(false)
  isEmpty = input<boolean>(false)
}
