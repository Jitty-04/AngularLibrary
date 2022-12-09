import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { BookentryComponent } from './bookentry/bookentry.component';
import { BooksearchComponent } from './booksearch/booksearch.component';
import { BookdeleteComponent } from './bookdelete/bookdelete.component';
import { BookeditComponent } from './bookedit/bookedit.component';
import { BookissueComponent } from './bookissue/bookissue.component';
import { BookviewComponent } from './bookview/bookview.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const myRouter:Routes=[
  {
  path:"",
  component:AdminLoginComponent

},

{
  path:"delete",
  component:BookdeleteComponent
},
{
  path:"edit",
  component:BookeditComponent
},
{
   path:"entry",
   component:BookentryComponent
},
{
  path:"issue",
  component:BookissueComponent
},
{
  path:"search",
  component:BooksearchComponent
},
{
  path:"view",
  component:BookviewComponent
},
{
  path:"userlogin",
  component:UserloginComponent
},
{
  path:"userregistration",
  component:UserregisterComponent
},
{
  path:"issue",
  component:BookissueComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserregisterComponent,
    UserloginComponent,
    BookentryComponent,
    BooksearchComponent,
    BookdeleteComponent,
    BookeditComponent,
    BookissueComponent,
    BookviewComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
