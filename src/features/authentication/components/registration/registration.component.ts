import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../core/services/api-service/api.service';
import { InputValidationService } from '../../services/inputValidation.service';

@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService, private inputValidationService: InputValidationService) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [inputValidationService.passwordValidator()]]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const payload = this.registrationForm.value;
      
      this.apiService.register(payload).subscribe({
        next: (response) => {
          console.log('Response:', response);
          this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
