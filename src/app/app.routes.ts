import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'heroes', component: HeroesComponent },
];
