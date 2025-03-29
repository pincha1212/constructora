import { AfterViewInit, Component } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-bienvenido',
  imports: [],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.scss',
})
export class BienvenidoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Animación para la tarjeta (.card)
    ScrollReveal().reveal('main', {
      origin: 'bottom',
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      reset: true,

    });

    // Animar las imágenes dentro del <section>
    const imageElements: NodeListOf<HTMLImageElement> =
      document.querySelectorAll('section img');
    imageElements.forEach((img: HTMLImageElement, index: number) => {
      ScrollReveal().reveal(img, {
        origin: index % 2 === 0 ? 'left' : 'right',
        distance: '100px',
        duration: 500,
        delay: index * 200,
        easing: 'ease-out',
        rotate: { x: 0, y: 0, z: index % 2 === 0 ? -10 : 10 },
        scale: 1.50,
        reset: true,

      });
    });
  }
}
