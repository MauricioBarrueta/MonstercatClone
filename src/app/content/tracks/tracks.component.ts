import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tracks',
  imports: [ CommonModule ],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.scss'
})
export class TracksComponent {

  tracksList: any[] = [
    {num: '1', name: 'Six Feet Deep', artist: 'The Warning', time: '3:00'},
    {num: '2', name: 'S!CK', artist: 'The Warning', time: '3:13'},
    {num: '3', name: 'Apologize', artist: 'The Warning', time: '3:42'},
    {num: '4', name: 'Qué Más Quieres', artist: 'The Warning', time: '3:05'},
    {num: '5', name: 'MORE', artist: 'The Warning', time: '3:08'},
    {num: '6', name: 'Escapism', artist: 'The Warning', time: '3:37'},
    {num: '7', name: 'Satisfied', artist: 'The Warning', time: '3:10'},
    {num: '8', name: 'Burnout', artist: 'The Warning', time: '3:25'},
    {num: '9', name: 'Sharks', artist: 'The Warning', time: '3:09'},
    {num: '10', name: 'Hell You Call A Dream', artist: 'The Warning', time: '2:57'},
    {num: '11', name: 'Consume', artist: 'The Warning', time: '3:08'},
    {num: '12', name: 'Automatic Sun', artist: 'The Warning', time: '3:11'}    
  ] 

  icon: string = '\u{f04b}'
  spinner: boolean = false
  index!: number
  setIndex(index: number) {
    this.index = index
  }

  play() {
    this.spinner = true
    setTimeout(() => {
      this.icon = '\u{f04c}'
      this.spinner = false
    }, 2000);
  } 
}