import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-lista-de-servicios',
  imports: [],
  templateUrl: './lista-de-servicios.component.html',
  styleUrl: './lista-de-servicios.component.scss',
})
export class ListaDeServiciosComponent implements AfterViewInit {
  ngAfterViewInit() {
    console.log('ScrollReveal iniciado');

    ScrollReveal().reveal('.service-card:nth-child(1)', {
      origin: 'left',
      distance: '150px',
      duration: 800,
      easing: 'ease-out',
      opacity: 0,
      reset: true,
    });

    ScrollReveal().reveal('.service-card:nth-child(2)', {
      origin: 'right',
      distance: '150px',
      duration: 800,
      easing: 'ease-out',
      opacity: 0,
      reset: true,
    });

    ScrollReveal().reveal('.service-card:nth-child(3)', {
      origin: 'bottom',
      distance: '150px',
      duration: 800,
      easing: 'ease-out',
      opacity: 0,
      reset: true,
    });
  }
}
