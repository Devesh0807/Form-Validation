import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import{RegistrationFormComponent} from './registration-form/registration-form.component';
import{SigninComponent} from './signin/signin.component'

const routes:Routes=[
  {path:'', component:SigninComponent},
  {path:'signin', component:SigninComponent},
  {path:'registration', component:RegistrationFormComponent},
]
@NgModule({
exports: [RouterModule],
imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
