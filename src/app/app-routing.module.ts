import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [{path:'',redirectTo:'/login',pathMatch:'full'}
,{path:'home',component:HomeComponent,canActivate:[AuthGuard]}
,{path:'sign-up',component:SigninComponent}
,{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
