import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { UsersComponent } from './content/users/users.component';
import { ProfileComponent } from './content/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data:{class:'home'}
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
