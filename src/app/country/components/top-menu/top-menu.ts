import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'country-top-menu',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.css'
})
export class TopMenu {

}
