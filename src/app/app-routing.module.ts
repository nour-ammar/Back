import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { EmployesComponent } from './main/employes/employes.component';
import { ShowComponent } from './main/employes/show/show.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'gestionnaires', component:MainComponent},
  { path:'employes', component:EmployesComponent},
  { path:'employes/show', component:ShowComponent}

  // {path:'Login',component:LoginComponent},
  // { path: 'gestionnaires',component:MainComponent,
  // children: [
  //   {path:'', redirectTo: 'gestionnaires', pathMatch: 'full'},
  //   { path: 'dashboard', component:DashboardComponent },
  //   { path: 'empolyers' , component:EmpolyerComponent},
  //   { path : 'poste-vacants' , component:PosteVacantComponent}

  // ],
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
