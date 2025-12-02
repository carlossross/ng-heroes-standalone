import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroStoreService {
  private heroService: HeroesService = inject(HeroesService);

  // Estado interno (privado)
  private _heroes = signal<Hero[]>([]);
  private _loading = signal(false);
  private _error = signal<string | null>(null);

  // Estado expuesto solo lectura
  heroes = this._heroes.asReadonly();
  loading = this._loading.asReadonly();
  error = this._error.asReadonly();

  // Acción: cargar héroes
  loadHeroes() {
    //Si ya hay datos evitamos la carga
    if (this._heroes().length > 0) {
      return;
    }

    this._loading.set(true);
    this._error.set(null);

    this.heroService.getHeroes().subscribe({
      next: (heroes) => {
        this._heroes.set(heroes.slice(0, 30));
      },
      error: (err) => {
        console.error(err);
        this._error.set('No se pudieron cargar los héroes');
        this._loading.set(false);
      },
      complete: () => {
        this._loading.set(false);
      },
    });
  }

  // Acción/selector: obtener héroe por id
  getHeroeById(id: number): Hero | null {
    return this._heroes().find((hero) => hero.id === id) ?? null;
  }
}
