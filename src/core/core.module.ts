import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ApiService } from './services/api-service/api.service';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  
  providers: [
    ApiService
  ],

  imports: [
    CommonModule
  ],

  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
