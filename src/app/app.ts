import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FondoLogingComponent } from './components/fondo-loging/fondo-loging.component';
import { ContenedorLogingComponent } from './components/contenedor-loging/contenedor-loging.component';
import { LogingComponent } from './components/loging/loging.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FondoLogingComponent, 
    ContenedorLogingComponent, 
    LogingComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('H2A3');
}