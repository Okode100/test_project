import { Component } from '@angular/core';
import { Hero } from '../hero';
import {UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HEROES} from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  imports: [
    UpperCasePipe,
    FormsModule
  ],
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };private = {
    id:2,
    name: 'Moses Okode'
  }
}

