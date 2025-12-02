import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  // private heores = [
  //   { id: 1, name: 'Batman' },
  //   { id: 2, name: 'Spiderman' },
  //   { id: 3, name: 'Wonder Woman' },
  // ];

  // getHeroes() {
  //   return this.heores;
  // }

  private http = inject(HttpClient);

  getHeroes() {
    return this.http.get<Hero[]>('https://akabab.github.io/superhero-api/api/all.json');
  }
}
