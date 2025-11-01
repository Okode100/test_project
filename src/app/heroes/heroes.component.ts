import { Component } from '@angular/core';
import { Hero } from '../hero';
import {UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

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
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };private = {
    id:2,
    name: 'Moses Okode'
  }
}
