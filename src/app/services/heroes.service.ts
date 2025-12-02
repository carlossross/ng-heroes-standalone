import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

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
    return this.http.get<any[]>('https://akabab.github.io/superhero-api/api/all.json');
  }
}
