import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

import { SoundService } from '../services/sound.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent {

  formats: BarcodeFormat[] = [BarcodeFormat.CODE_128, BarcodeFormat.CODE_39, BarcodeFormat.ITF];
  currentDevice = null;
  hasDevices = false;
  hasPermission = false;
  initializing = true;

  constructor(
    private soundService: SoundService
  ) {}

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.hasDevices = Boolean(devices && devices.length);
    this.initializing = false;
  }

  onCamerasNotFound(): void {
    this.hasDevices = false;
    this.initializing = false;
  }

  onHasPermission(has: boolean): void {
    this.hasPermission = has;
    if (!has) {
      this.initializing = false;
    }
  }

  scanComplete(scan: string): void {
    this.soundService.beep();
    console.log(scan);
  }

}
