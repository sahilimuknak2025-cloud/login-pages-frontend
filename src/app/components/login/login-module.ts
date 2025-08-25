import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Login1 } from './login1/login1';
import { Login2 } from './login-2/login-2';
import { Login3 } from './login-3/login-3';
import { Login4 } from './login-4/login-4';
import { Login5 } from './login-5/login-5';
import { Login6 } from './login-6/login-6';
import { Login7 } from './login-7/login-7';

import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [  
  ],
  imports: [
    Login1,
    Login2,
    Login3,
    Login4,
    Login5,
    Login6,
    Login7,
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule 
  ]
})
export class LoginModule {}
