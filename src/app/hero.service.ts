import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './models/Hero';
import { HEROES } from './mocks/mock-heroes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
