import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenida-anuncio',
  imports: [CommonModule],
  templateUrl: './bienvenida-anuncio.component.html',
  styleUrl: './bienvenida-anuncio.component.scss',
})
export class BienvenidaAnuncioComponent {
  showAnnouncement: boolean = true;

  constructor() {}

  closeAnnouncement(): void {
    this.showAnnouncement = false;
  }
}
