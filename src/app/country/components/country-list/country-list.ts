import {Component, signal} from '@angular/core';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css'
})
export class CountryList {
  list = signal<any[]>([])
}
