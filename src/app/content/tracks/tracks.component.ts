import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

/* Variable usada por la API de YouTube */
declare var YT: any

@Component({
  selector: 'app-tracks',
  imports: [ CommonModule ],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss'
})

export class TracksComponent implements AfterViewInit {

  tracksList: any[] = [
    {num: '1', name: 'Ritual', artist: 'The Warning', time: '3:24', ytId: 'X4NfZBUKlzM'},
    {num: '2', name: 'Perfect Daughter', artist: 'The Warning', time: '3:25', ytId: 'ZNCbLKE3wcQ'},
    {num: '3', name: "Everything's Falling", artist: 'The Warning', time: '3:50', ytId: '6PFfhPE686A'},
    {num: '4', name: 'Why Do You Like It When I Cry?', artist: 'The Warning', time: '3:16', ytId: '2NYRgSlAOBw'},
    {num: '5', name: 'Bite My Tongue', artist: 'The Warning', time: '3:20', ytId: 'XqfbcQCl9xk'},
    {num: '6', name: 'Kill Or Be Killed', artist: 'The Warning', time: '3:03', ytId: 'sdlJPAW2xvc'},
    {num: '7', name: 'Ego', artist: 'The Warning', time: '2:54', ytId: 'o4Q6k5xUX2o'},
    {num: '8', name: 'Bloodsport', artist: 'The Warning', time: '3:19', ytId: 'ieup-9J6qw4'},    
    {num: '9', name: 'Break', artist: 'The Warning', time: '3:13', ytId: 'FNqN5VIkcbM'},
    {num: '10', name: 'Bruises', artist: 'The Warning', time: '3:09', ytId: '_cIeca1u7ks'},
    {num: '11', name: 'Waste Your Time On Me', artist: 'The Warning', time: '2:54', ytId: 'agsB1YcbcCo'},
    {num: '12', name: 'Kerosene', artist: 'The Warning', time: '3:26', ytId: '7dTLCogC_EI'}    
  ] 
  
  btnIcon: string = '\u{f04b}'
  spinner: boolean = false
  index!: number
  player: any
  playerReady: boolean = false

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.loadYouTubeAPI()
    }
  }

  /* Se carga la API de YouTube */ 
  loadYouTubeAPI() {
    /* Evita que se recargue la API */
    if ((window as any).YT) {
      this.initPlayer()
      return
    }
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'; //* Aquí se define la variable YT
    document.body.appendChild(tag);

    (window as any).onYouTubeIframeAPIReady = () => {
      this.initPlayer()
    };
  }

  initPlayer() {
    this.player = new YT.Player('player', {
      height: '0',  width: '0',
      events: {
        onReady: () => {
          this.playerReady = true
          this.player.setVolume(100)
        },
        onStateChange: (event: any) => this.onPlayerStateChange(event)
      }
    });
  }

  /* Se obtiene y asigna el índice (canción) seleccionado */
  setIndex(i: number) {
    this.index = i
  }

  /* Para controlar el estado del audio (play - pause) */
  playPauseController(i: number) {
    /* Verifica si ya se cargó el reproductor o no */
    if (!this.playerReady) return

    const track = this.tracksList[i]
    //* Pause
    if (this.index === i && this.btnIcon === '\u{f04c}') {
      this.pause()
      return
    }
    //* Play
    this.setIndex(i)
    this.spinner = true
    setTimeout(() => {
      this.btnIcon = '\u{f04c}'
      this.spinner = false
      /* Se carga el video */
      this.player.loadVideoById(track.ytId)
      this.player.setVolume(100)
    }, 100);
  }

  /* Para pausar la reproducción y resetear el botón */
  pause() {
    if (this.player && this.playerReady) {
      this.player.pauseVideo()
      this.btnIcon = '\u{f04b}'
    }
  }

  /* Para controlar el estado del reproductor (API) */
  onPlayerStateChange(event: any) {
    if (event.data === YT.PlayerState.ENDED) {
      this.btnIcon = '\u{f04b}'
    }
  }
}