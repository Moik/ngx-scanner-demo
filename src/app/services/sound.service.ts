import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SoundService {
  private scanAudio = new Audio();

  constructor() {
    this.loadScanAudio();
  }

  private loadScanAudio(): void {
    this.scanAudio.src = 'assets/beep.wav';
    this.scanAudio.load();
  }


  beep(): void {
    this.scanAudio.play();
  }
}
