import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../interfaces/characters';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  dataCharacters: Character[] = []
  backgroundColors: string[] = ['#b5d2e4', '#f0e14a', '#f675da', '#e4a788', '#0f7216', '#b5d2e4'];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getMainCharacters()
  }

  getMainCharacters() {
    this.characterService.getCharacters().subscribe({
      next:(data: Character[]) => {
        this.dataCharacters = data
        console.log(this.dataCharacters)
      },
      error:(err) => {
        console.log(err)
      }
    })
  }

  getBackgroundColor(index: number): string {
    return this.backgroundColors[index];
  }

  
}
