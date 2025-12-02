import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'heroes', component: HeroesComponent },
  {
    path: 'hero/:id',
    loadComponent: () =>
      import('./pages/hero-detail/hero-detail.component').then((m) => HeroDetailComponent),
  },
];
