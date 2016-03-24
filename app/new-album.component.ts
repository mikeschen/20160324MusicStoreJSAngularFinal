import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'new-album',
  outputs: ['onSubmitNewAlbum'],
  template: `
    <div class="album-form">
      <h3>Create Album:</h3>
      <input placeholder="Album Name" class="input-md" #newName>
      <input placeholder="Album Artist" class="input-md" #newArtist>
      <input placeholder="Album Price" class="input-md" #newPrice>
      <select #newGenre>
        <option value="rock" selected="selected">Rock</option>
        <option value="country">Country</option>
      </select>
      <button (click)="addAlbum(newName, newArtist, newPrice, newGenre)" class="btn-success">Add</button>
    </div>
    `
})
export class NewAlbumComponent {
  public onSubmitNewAlbum: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewAlbum = new EventEmitter();
  }
  addAlbum(userName: HTMLInputElement, userArtist: HTMLInputElement, userPrice: HTMLInputElement, userGenre: HTMLInputElement){
    this.onSubmitNewAlbum.emit([userName.value, userArtist.value, userPrice.value, userGenre.value])
    userName.value = "";
    userArtist.value = "";
    userPrice.value = "";
    userGenre.value = "";
  }
}
