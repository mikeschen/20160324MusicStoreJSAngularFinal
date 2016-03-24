import { Component } from 'angular2/core';
import { Album } from './album.model';
import { AlbumListComponent } from './album-list.component';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <h3>{{ album.name }}</h3>
    <ul>
      <li>{{ album.artist }}</li>
      <li>$ {{ album.price }}</li>
      <li>{{ album.genre }}</li>
    </ul>
  `
})

export class AlbumComponent {
  public album: Album;
}
