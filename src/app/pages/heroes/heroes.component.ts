import { Component, inject } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  imports: [],
  templateUrl: './heroes.html',
  styleUrl: './heroes.scss',
})
export class HeroesComponent {
  private heroesService = inject(HeroesService);

  heroes = this.heroesService.getHeroes();
}
