import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [],
})
export class DynamicsComponent {

  person: Person = {
    name: 'Luis Mazariego',
    favorites: [
      { id: 1, name: 'One Piece' },
      { id: 2, name: '7 Deadly Sins' },
    ],
  };

  newGame: string = '';

  ngOnInit(): void {}

  save() {
    console.log('Posted');
  }

  addGame() {
    const newFavGame: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    };

    this.person.favorites.push({...newFavGame});
    this.newGame = ''

  }

  delete(index: number) {
    this.person.favorites.splice(index, 1);
  }
}
