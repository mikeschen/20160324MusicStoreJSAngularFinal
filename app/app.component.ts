import { Component, EventEmitter } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
  <div class="container">
    <h1>CD Store</h1>
    <album-list
      [albumList]="albums"
      [artistList]="artists"
      (onAlbumSelect)="albumWasSelected($event)">
    </album-list>
  </div>
  `
})

export class AppComponent {
  public albums: Album[];
  public artists: String[];
  constructor(){

    this.artists = ["Bo Diddley", "Nirvana", "Wu-Tang Clan", "Johnny Cash"];

    this.albums = [
      new Album("Nevermind", "Nirvana", 9, "rock", 1),
      new Album("Hey Bo Diddley", "Bo Diddley", 8, "rock", 2),
      new Album("Enter the 36 Chambers", "Wu-Tang Clan", 7, "rap", 3),
      new Album("Folsom Prison", "Johnny Cash", 9, "country", 4),
    ];
  }
  albumWasSelected(clickedAlbum: Album): void {
    console.log('parent', clickedAlbum);
  }
}


export class Album {
  constructor(public name: string, public artist: string, public price: number, public genre: string, public id: number){

  }
}
