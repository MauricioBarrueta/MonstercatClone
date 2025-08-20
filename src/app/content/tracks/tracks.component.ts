import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

/* Variable usada por la API de YouTube */
declare var YT: any

@Component({
  selector: 'app-tracks',
  imports: [ CommonModule ],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss'
})

export class TracksComponent implements OnInit {

  tracksList: any[] = [
    {num: '1', name: 'Six Feet Deep', artist: 'The Warning', time: '3:00', ytId: 'BKOlJg72lag'},
    {num: '2', name: 'S!CK', artist: 'The Warning', time: '3:13', ytId: 'BCaYxNpeN3A'},
    {num: '3', name: 'Apologize', artist: 'The Warning', time: '3:42', ytId: 'VoxxvAu40Gw'},
    {num: '4', name: 'Qué Más Quieres', artist: 'The Warning', time: '3:05', ytId: 'auRdzLcdyx4'},
    {num: '5', name: 'MORE', artist: 'The Warning', time: '3:08', ytId: 'SvdyemWt_Zc'},
    {num: '6', name: 'Escapism', artist: 'The Warning', time: '3:37', ytId: 'ZaJ23iIwFMU'},
    {num: '7', name: 'Satisfied', artist: 'The Warning', time: '3:10', ytId: 'sEBIh48HrH8'},
    {num: '8', name: 'Burnout', artist: 'The Warning', time: '3:25', ytId: 'qPrPXHQCxvA'},
    {num: '9', name: 'Sharks', artist: 'The Warning', time: '3:09', ytId: 'rnbH_TUsnwo'},
    {num: '10', name: 'Hell You Call A Dream', artist: 'The Warning', time: '2:57', ytId: 'GEFUzXeS3N4'},
    {num: '11', name: 'Consume', artist: 'The Warning', time: '3:08', ytId: '7idyzgKqts4'},
    {num: '12', name: 'Automatic Sun', artist: 'The Warning', time: '3:11', ytId: 'kv5e1OYCrwA'}    
  ] 
  
  btnIcon: string = '\u{f04b}'
  spinner: boolean = false
  index!: number
  player: any
  playerReady: boolean = false

  ngOnInit() {    
    this.loadYouTubeAPI()
  }

  /* Se carga la API de YouTube */
  loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api'; //* Aquí se define la variable YT
    document.body.appendChild(tag);
    /* Se crea el reproductor */
    (window as any).onYouTubeIframeAPIReady = () => {
      this.player = new YT.Player('player', {
        height: '0', width: '0',
        events: {
          onReady: (event: any) => {
            this.playerReady = true
            this.player.setVolume(100)
          },
          onStateChange: (event: any) => this.onPlayerStateChange(event)
        }
      });
    };
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