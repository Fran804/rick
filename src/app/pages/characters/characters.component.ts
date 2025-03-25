import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../interfaces/characters';

@Component({
  selector: 'app-characters',
  imports: [],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  dataCharacters: Character[] = []

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

  
}
