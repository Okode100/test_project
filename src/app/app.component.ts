import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {NavigationbarComponent} from './navigationbar/navigationbar.component';

@Component({
  selector: 'app-root',

  imports: [RouterOutlet, HeroesComponent, NavigationbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Test project'
}
