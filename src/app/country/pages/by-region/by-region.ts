import { Component } from '@angular/core';
import {CountryList} from '../../components/country-list/country-list';

@Component({
  selector: 'by-region',
  imports: [
    CountryList
  ],
  templateUrl: './by-region.html',
  styleUrl: './by-region.css'
})
export class ByRegionPage {

}
