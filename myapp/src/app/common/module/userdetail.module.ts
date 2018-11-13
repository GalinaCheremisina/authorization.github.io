import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from 'src/app/content/profile/user-detail/user-detail.component';

const routes:Routes = [
    { path:'',
      component: UserDetailComponent
    }]

@NgModule({
  declarations: [      
      UserDetailComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserDetailModule {}