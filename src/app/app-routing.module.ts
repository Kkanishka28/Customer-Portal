import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {DashboardComponent  } from './dashboard/dashboard.component'; 
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { AboutComponent } from './about/about.component';





const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path :'home', component: HomeComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'create',component:CreateComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
