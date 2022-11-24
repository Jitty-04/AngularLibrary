import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { BookentryComponent } from './bookentry/bookentry.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserregisterComponent,
    UserloginComponent,
    BookentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
