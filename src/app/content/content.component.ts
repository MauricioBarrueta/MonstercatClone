import { Component } from '@angular/core';
import { TracksComponent } from "./tracks/tracks.component";
import { SafePipe } from '../safe.pipe';
import { AlbumsComponent } from "./albums/albums.component";

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  imports: [TracksComponent, SafePipe, AlbumsComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  providers: [ Title ]
})
export class ContentComponent {
  
  constructor(private title: Title) {
    this.title.setTitle(`${this.albumTitle} - Monstercat`)
  }

  albumTitle: string = 'ERROR'
  albumImg: string = 'https://i.scdn.co/image/ab67616d0000b27309fe21cd518d989e0c31224d'
}