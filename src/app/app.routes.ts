import { Routes } from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: '',
    component:SidebarComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  { path: '**', redirectTo: 'login' }

];
