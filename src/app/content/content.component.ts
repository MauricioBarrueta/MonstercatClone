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
  albumTitle: string = 'Keep Me Fed'
  albumImg: string = 'https://i.scdn.co/image/ab67616d0000b27393c50048dce0f88071728c8c'
  releasedDate: string = 'Jun 28, 2024'
  
  constructor(private title: Title) {
    this.title.setTitle(`${this.albumTitle} - Monstercat`)
  }
}