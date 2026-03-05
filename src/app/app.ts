import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FondoLogingComponent } from './components/fondo-loging/fondo-loging.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FondoLogingComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('H2A3');
}