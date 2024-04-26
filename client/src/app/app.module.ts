import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TopnavComponent } from './main/topnav/topnav.component';
import { EmployesComponent } from './main/employes/employes.component';
import { ShowComponent } from './main/employes/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    LoginComponent,
    TopnavComponent,
    EmployesComponent,
    ShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
