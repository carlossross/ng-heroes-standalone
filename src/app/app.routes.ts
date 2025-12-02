import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Heroes } from './pages/heroes/heroes';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'heroes', component: Heroes },
];
