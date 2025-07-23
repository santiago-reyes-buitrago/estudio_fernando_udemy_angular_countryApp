import {Component, inject} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.html',
  styleUrl: './error.css'
})
export class Error {
  location  = inject(Location);

  goBack(){
    this.location.back();
  }
}
