import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-quienes-somos',
  imports: [],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.scss'
})
export class QuienesSomosComponent implements AfterViewInit {
  ngAfterViewInit() {
    ScrollReveal().reveal('.image-container', {
      origin: 'left',
      distance: '150px',
      duration: 800,
      easing: 'ease-out',
      opacity: 0,
      reset: true
    });

    ScrollReveal().reveal('.text-container', {
      origin: 'bottom',
      distance: '100px',
      duration: 900,
      easing: 'ease-out',
      opacity: 0,
      reset: true,
      delay: 300
    });

    ScrollReveal().reveal('.small-image-container', {
      origin: 'bottom',
      distance: '100px',
      duration: 900,
      easing: 'ease-out',
      opacity: 0,
      reset: true,
      delay: 500
    });
  }
}
