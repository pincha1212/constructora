import { Component } from '@angular/core';
import { EncabezadoComponent } from "./encabezado/encabezado.component";
import { BienvenidoComponent } from "./bienvenido/bienvenido.component";
import { ListaDeServiciosComponent } from "./lista-de-servicios/lista-de-servicios.component";
import { QuienesSomosComponent } from "./quienes-somos/quienes-somos.component";
import { ProductosComponent } from "./productos/productos.component";

@Component({
  selector: 'app-root',
  imports: [EncabezadoComponent, BienvenidoComponent, ListaDeServiciosComponent, QuienesSomosComponent, ProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'constructora';
}
