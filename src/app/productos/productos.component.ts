import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
})
export class ProductosComponent implements AfterViewInit {
  ngAfterViewInit() {
    const revealOptions = {
      distance: '200px',
      duration: 800,
      easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
      opacity: 0,
      reset: true,
    };

    ScrollReveal().reveal('.product-item', {
      ...revealOptions,
      origin: 'left',
    });

    ScrollReveal().reveal('.product-image', {
      ...revealOptions,
      origin: 'right',
    });
  }
}
