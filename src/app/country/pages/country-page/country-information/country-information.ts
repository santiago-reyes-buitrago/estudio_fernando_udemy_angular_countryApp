import {Component, computed, input} from '@angular/core';
import {CountryInterface} from '../../../interfaces/country.interface';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'country-information',
  imports: [
    DecimalPipe
  ],
  templateUrl: './country-information.html',
  styleUrl: './country-information.css'
})
export class CountryInformation {
  countryInfomation = input.required<CountryInterface>()

  currentYear = computed(()=> {
    return new Date().getFullYear();
  });
}
