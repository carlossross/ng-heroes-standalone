import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroStoreService } from '../../stores/hero-store.service';

@Component({
  selector: 'app-heroes',
  imports: [RouterLink],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class HeroesComponent {
  private heroStore = inject(HeroStoreService);

  // Signals del store
  heroes = this.heroStore.heroes;
  loading = this.heroStore.loading;
  error = this.heroStore.error;

  constructor() {
    this.heroStore.loadHeroes();
  }
}
