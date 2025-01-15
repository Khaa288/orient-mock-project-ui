import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('../features/authentication/authentication-routing.module').then(a => a.AuthenticationRoutingModule) },
  { path: '**', redirectTo: '/' } // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
