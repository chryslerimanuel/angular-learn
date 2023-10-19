import { Component } from '@angular/core';
import { Hero } from '../models/Hero';
// import { HEROES } from '../mocks/mock-heroes';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) { }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // heroes: Hero[] = HEROES;
  heroes: Hero[] = [];

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
} 
