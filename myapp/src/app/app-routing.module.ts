import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { ProfileComponent } from './content/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile', 
   // loadChildren:'./common/module/profile.module#ProfileleModule'
    component: ProfileComponent
  },
  {
    path: 'users', 
    loadChildren:'./common/module/users.module#UsersModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
