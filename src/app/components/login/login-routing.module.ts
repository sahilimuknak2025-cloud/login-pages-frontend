import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login1 } from './login1/login1';
import { Login2 } from './login-2/login-2';
import { Login3 } from './login-3/login-3';
import { Login4 } from './login-4/login-4';
import { Login5 } from './login-5/login-5';
import { Login6 } from './login-6/login-6';
import { Login7 } from './login-7/login-7';


const routes: Routes = [
  { path: 'login1', component: Login1 },
  { path: 'login2', component: Login2 },
  { path: 'login3', component: Login3 },
  { path: 'login4', component: Login4 },
  { path: 'login5', component: Login5 },
  { path: 'login6', component: Login6 },
  { path: 'login7', component: Login7 },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
