import { Component } from '@angular/core';
import {NgForOf, NgIf, UpperCasePipe} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    UpperCasePipe
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

}
