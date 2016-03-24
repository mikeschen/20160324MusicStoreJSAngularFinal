import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { NewAlbumComponent } from './new-album.component';
import {GenrePipe} from './genre.pipe';
import {ArtistPipe} from './artist.pipe';


@Component({
  selector: 'album-list',
  inputs: ['albumList', 'artistList'],
  outputs: ['onAlbumSelect'],
  pipes: [GenrePipe, ArtistPipe],
  directives: [AlbumComponent, NewAlbumComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">Show All Genres</option>
    <option value="rock">Show Rock Albums</option>
    <option value="country">Show Country Albums</option>
  </select>
  <select (change)="onChange2($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All Artist Albums</option>
		<option *ngFor="#artist of artistList" value="{{artist}}">show {{artist}}</option>
	</select>
  <album-display *ngFor="#currentAlbum of albumList | genre:filterGenre | artist: [filterArtist, artistList]"
  (click)="albumClicked(currentAlbum)"
    [class.selected]="currentAlbum === selectedAlbum"
    [album]="currentAlbum">
  </album-display>
  <new-album (onSubmitNewAlbum)="createAlbum($event)"></new-album>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public artistList: String[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public filterGenre: string = "all";
  public filterArtist: string= "all";
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
    this.artistList.push(artist);
  }
  onChange(filterOption) {
    this.filterGenre = filterOption;
  }
  onChange2(filterOption) {
    this.filterArtist = filterOption;
  }
}
