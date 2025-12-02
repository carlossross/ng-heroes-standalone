import { Component, inject } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-heroes',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class HeroesComponent {
  private heroesService = inject(HeroesService);

  //heroes = this.heroesService.getHeroes();
  $heroes = this.heroesService.getHeroes();
}
