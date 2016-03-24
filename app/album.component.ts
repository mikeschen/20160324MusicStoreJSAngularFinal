import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <h3>{{ album.name }}</h3>
  `
})

export class AlbumComponent {
  public album: Album;
}
