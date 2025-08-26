import { Routes } from '@angular/router';
import { Login1 } from './components/login/login1/login1';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { SignUp } from './components/sign-up/sign-up';
import { Login2 } from './components/login/login-2/login-2';
import { Login3 } from './components/login/login-3/login-3';
import { Login4 } from './components/login/login-4/login-4';
import { Login5 } from './components/login/login-5/login-5';
import { Login6 } from './components/login/login-6/login-6';
import { Home } from './components/home/home';
import { Login7 } from './components/login/login-7/login-7';
import { Signup2 } from './components/signup-2/signup-2';
import { UserTable } from './components/user-table/user-table';


export const routes: Routes = [
    {
        path: '',
        component:Home
    },
    {
        path: 'login',
        loadChildren:() => import('./components/login/login-module').then( m => m.LoginModule)
    },

    {
        path: 'forgot-password',
        component: ForgotPassword
    }, 
    {
        path: 'sign-up',
        component: SignUp
    },
    {
        path: 'sign-up2',
        component: Signup2  
    },
     {
        path: 'user-table',
        component: UserTable  
    }


];
