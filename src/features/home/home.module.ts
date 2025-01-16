import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
