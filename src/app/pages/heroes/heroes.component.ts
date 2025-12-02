import { Component, inject, signal } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-heroes',
  imports: [RouterLink],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class HeroesComponent {
  private heroesService = inject(HeroesService);

  //heroes = this.heroesService.getHeroes();
  //$heroes = this.heroesService.getHeroes();

  // Signals de estado
  heroes = signal<Hero[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  constructor() {
    this.loadHeroes();
  }

  private loadHeroes() {
    this.loading.set(true);
    this.error.set(null);

    this.heroesService.getHeroes().subscribe({
      next: (heroes) => {
        // Limitar paa no tener como 500 registros
        this.heroes.set(heroes.slice(0, 20));
      },
      error: (err) => {
        console.error(err);
        this.error.set('No se pudieron cargar los héroes');
        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
      },
    });
  }
}
