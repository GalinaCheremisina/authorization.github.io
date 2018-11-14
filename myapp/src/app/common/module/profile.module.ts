import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from 'src/app/content/profile/profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes:Routes = [
  { path:'',
    component: ProfileComponent
  }]

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProfileleModule { }
