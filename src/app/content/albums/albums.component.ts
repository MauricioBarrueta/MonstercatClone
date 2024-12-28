import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-albums',
  imports: [ CommonModule ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.scss'
})
export class AlbumsComponent {
  releases$: any[] = [
    { cover: 'https://i.scdn.co/image/ab67616d0000b273ebd25082bf514bd05cc4cfd2', 
      album: 'Escape the Mind',
      year: '2015'
    },
    { cover: 'https://i.scdn.co/image/ab67616d0000b27304a3dad60eb365aec55022de', 
      album: 'XXI Century Blood',
      year: '2017'
    },
    { cover: 'https://i.scdn.co/image/ab67616d0000b273d5e8959e6099cccb868507aa', 
      album: 'Queen of the Murder Scene',
      year: '2018'
    },
    { cover: 'https://i.scdn.co/image/ab67616d0000b2732dc9d2a001627474dd17b8bb', 
      album: 'MAYDAY (EP)',
      year: '2021'
    },
    { cover: 'https://i.scdn.co/image/ab67616d0000b27309fe21cd518d989e0c31224d', 
      album: 'ERROR',
      year: '2022'
    },
    { cover: 'https://i.scdn.co/image/ab67616d0000b27393c50048dce0f88071728c8c', 
      album: 'Keep Me Fed',
      year: '2024'
    },
  ]
}