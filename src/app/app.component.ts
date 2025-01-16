import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'orient-mock-project-ui';
  
  isLoggedIn = sessionStorage.getItem('token') !== null;
}
