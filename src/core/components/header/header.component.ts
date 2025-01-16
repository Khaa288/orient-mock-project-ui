import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn = false;

  constructor() {
    this.isLoggedIn = sessionStorage.getItem('token') !== null;
  }
}
