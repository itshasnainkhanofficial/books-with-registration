import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';




const routes: Routes = [
  {
    path:"",
    redirectTo: "/login",
    pathMatch: "full"
  },
  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },
  
  { path: 'dashboard', component: DashboardComponent , canActivate : [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
