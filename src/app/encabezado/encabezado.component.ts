import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [CommonModule],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.scss',
})
export class EncabezadoComponent {
  showNav = false;

  toggleNav(): void {
    this.showNav = !this.showNav;
  }
}
