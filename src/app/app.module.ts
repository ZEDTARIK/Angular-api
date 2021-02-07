import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/Users/user-list/user-list.component';
import { SingInComponent } from './components/Users/sing-in/sing-in.component';
import { RegisterComponent } from './components/Users/register/register.component';
import { NavbarComponent } from './components/Shared/navbar/navbar.component';
import { PageNotFoundComponent } from './components/Shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SingInComponent,
    RegisterComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
