import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavegacionComponent } from "../navegacion/navegacion.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    NavegacionComponent
],
  template: `<app-navegacion></app-navegacion>
  <header>
        <img src="panel-principal.jpg" alt="">
  </header>

  `,
  styleUrl: './inicio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
