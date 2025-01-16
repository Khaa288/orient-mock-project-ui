import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../core/services/api-service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  invalidLogin: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) {
    this.loginForm = this.fb.group({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const payload = this.loginForm.value;
      const token = 'token';

      this.apiService.login(payload).subscribe({
        next: (response) => {
          console.log('Response:', response);

          sessionStorage.setItem(token, JSON.stringify(response.result));
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Error:', error);

          this.invalidLogin = true;
        }
      });
    } 
    
    else {
      console.log('Form is invalid');
    }
  }
}
