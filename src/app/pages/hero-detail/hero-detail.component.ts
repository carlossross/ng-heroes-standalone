import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeroStoreService } from '../../stores/hero-store.service';

@Component({
  selector: 'app-hero-detail',
  imports: [RouterLink],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.scss',
})
export class HeroDetailComponent {
  private route = inject(ActivatedRoute);
  private heroStore = inject(HeroStoreService);

  id = Number(this.route.snapshot.paramMap.get('id'));

  loading = this.heroStore.loading;
  error = this.heroStore.error;

  // computed: se recalcula cuando cambia heroes()
  hero = computed(() => this.heroStore.heroes().find((hero) => hero.id === this.id) ?? null);

  constructor() {
    // Por si entrar directo al detalle
    this.heroStore.loadHeroes();
  }
}
