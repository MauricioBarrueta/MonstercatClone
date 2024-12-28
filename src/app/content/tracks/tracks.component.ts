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
    {num: '1', name: 'Error 404', artist: 'The Warning', time: '0:57', status: false},
    {num: '2', name: 'DISCIPLE', artist: 'The Warning', time: '3:41', status: false},
    {num: '3', name: 'CHOKE', artist: 'The Warning', time: '3:52', status: false},
    {num: '4', name: 'ANIMOSITY', artist: 'The Warning', time: '4:07', status: false},
    {num: '5', name: 'MONEY', artist: 'The Warning', time: '3:15', status: false},
    {num: '6', name: 'AMOUR', artist: 'The Warning', time: '3:55', status: false},
    {num: '7', name: 'EVOLVE', artist: 'The Warning', time: '3:34', status: false},
    {num: '8', name: 'ERROR', artist: 'The Warning', time: '3:58', status: false},
    {num: '9', name: 'Z', artist: 'The Warning', time: '3:03', status: false},
    {num: '10', name: '23', artist: 'The Warning', time: '4:01', status: false},
    {num: '11', name: 'KOOL AID KIDS', artist: 'The Warning', time: '3:23', status: false},
    {num: '12', name: 'REVENANT', artist: 'The Warning', time: '4:22', status: false},
    {num: '13', name: 'MARTIRIO', artist: 'The Warning', time: '4:05', status: false},
    {num: '14', name: 'Breathe (Bonus Track)', artist: 'The Warning', time: '2:49', status: false}  
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