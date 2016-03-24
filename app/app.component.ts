import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>CD Store</h1>
    <h3 *ngFor="#album of albums">{{ album.name }}</h3>
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
}

export class Album {
  constructor(public name: string, public artist: string, public price: number, public genre: string, public id: number){

  }
}
