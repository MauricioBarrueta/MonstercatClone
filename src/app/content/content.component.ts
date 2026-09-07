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

  artist: string = 'The Warning'
  albumTitle: string = "Everything's Falling"
  albumImg: string = 'https://i.scdn.co/image/ab67616d0000b273bd5120648a1dd04dab5d3a84'
  releasedDate: string = 'Ago. 28, 2026'
  
  constructor(private title: Title) {
    this.title.setTitle(`${this.albumTitle} - Monstercat`)
  }
}