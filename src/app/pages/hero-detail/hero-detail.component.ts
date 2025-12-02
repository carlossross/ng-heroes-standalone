import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  imports: [],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.scss',
})
export class HeroDetailComponent {
  private route = inject(ActivatedRoute);

  id = this.route.snapshot.paramMap.get('id');
}
