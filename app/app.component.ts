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
      (onAlbumSelect)="albumWasSelected($event)">
    </album-list>
  </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("Nevermind", "Nirvana", 9, "rock", 0),
      new Album("Hey Bo Diddley", "Bo Diddley", 8, "rock", 1),
      new Album("Enter the Wu-Tang", "Wu-Tang Clan", 7, "rap", 2),
      new Album("Folsom Prison", "Johnny Cash", 9, "country", 3),
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
