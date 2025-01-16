import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../features/home/home-routing.module').then(a => a.HomeRoutingModule) },
  { path: 'auth', loadChildren: () => import('../features/authentication/authentication-routing.module').then(a => a.AuthenticationRoutingModule) },
  { path: '**', redirectTo: '/' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
