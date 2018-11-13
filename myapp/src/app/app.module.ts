import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './content/home/home.component';
import { ProfileComponent } from './content/profile/profile.component';
import { UsersComponent } from './content/users/users.component';
import { MenuComponent } from './content/block/menu/menu.component';
import { UsersService } from './common/service/users.service';
import { UserDetailComponent } from './content/profile/user-detail/user-detail.component';
import { FormChangeComponent } from './content/users/form-change/form-change.component';
import { FormAddComponent } from './content/users/form-add/form-add.component';
import { UsersModule } from './common/module/users.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    //UsersComponent,
    MenuComponent,
    UserDetailComponent,
    FormChangeComponent,
    FormAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
