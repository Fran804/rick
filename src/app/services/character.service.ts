import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  baseApi = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,119'

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<Character[]>(this.baseApi)
  }
}
