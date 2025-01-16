import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ApiService } from './services/api-service/api.service';
import { RouterLink } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  
  providers: [
    ApiService,
    provideHttpClient()
  ],

  imports: [
    CommonModule,
    RouterLink
  ],

  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
