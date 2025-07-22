import {Component, input, signal} from '@angular/core';
import {CountryInterface} from '../../interfaces/country.interface';
import {DecimalPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [
    DecimalPipe,
    RouterLink
  ],
  templateUrl: './country-list.html',
  standalone: true,
  styleUrl: './country-list.css'
})
export class CountryList {
  list = input.required<CountryInterface[]>()
  errorMessage = input<string|unknown>()
  isLoading = input<boolean>(false)
  isEmpty = input<boolean>(false)
}
