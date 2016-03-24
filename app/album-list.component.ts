import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { NewAlbumComponent } from './new-album.component';
import {GenrePipe} from './genre.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  pipes: [GenrePipe],
  directives: [AlbumComponent, NewAlbumComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="rock">Show Rock Albums</option>
    <option value="country">Show Country Albums</option>
  </select>
  <album-display *ngFor="#currentAlbum of albumList | genre:filterGenre"      (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>
  <new-album (onSubmitNewAlbum)="createAlbum($event)"></new-album>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public filterGenre: string = "all";
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    console.log('child', clickedAlbum);
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
  createAlbum([name, artist, price, genre]): void {
    this.albumList.push(
      new Album(name, artist, price, genre, this.albumList.length)
    );
  }
  onChange(filterOption) {
    this.filterGenre = filterOption;
  }
}
