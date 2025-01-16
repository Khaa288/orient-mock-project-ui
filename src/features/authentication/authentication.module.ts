import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';
import { CoreModule } from '../../core/core.module';
import { InputValidationService } from './services/inputValidation.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  providers: [
    InputValidationService
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],
  exports: [
    LoginComponent,
    RegistrationComponent
  ]
})

export class AuthenticationModule { }
