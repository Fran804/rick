import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { OpinionsComponent } from './pages/opinions/opinions.component';
import { JoinClubComponent } from './pages/join-club/join-club.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, AboutComponent, CharactersComponent, OpinionsComponent, JoinClubComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rick';
}
