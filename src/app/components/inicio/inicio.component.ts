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
        
        <div class="container-fondo-principal"></div>
        <img class="fondo-principal" src="inicio/fondo-principal.jpg" alt="">
        <img class="walnesy" src="inicio/walnesy.png" alt="">
        <div class="seccion-1">
          <img src="inicio/logo.png" alt="">
        </div>
        <div class="seccion-2">
          <p class="p-walnesy">WALNESY</p>
          <div class="seccion-2-1">
            <p class="p-borquez">BORQUEZ</p>
            <p class="p-vicepresidente">VICEPRESIDENTE</p>
          </div>
        </div>
        <div class="seccion-3">
          <div class="seccion-3-1">
            <p>FUERZA</p>
            <p>QUE TE</p>
            <p>ACTIVA</p>
          </div>
          <div class="seccion-3-2">
            <p class="correo">&#64;walnesyborquez</p>
            <ul>
              <li><a href=""><img src="inicio/instagram.svg" alt=""></a></li>
              <li><a href=""><img src="inicio/tiktok.svg" alt=""></a></li>
              <li><a href=""><img src="inicio/facebook.svg" alt=""></a></li>
              <li><a href=""><img src="inicio/twitter.svg" alt=""></a></li>
              <li><a href=""><img src="inicio/youtube.svg" alt=""></a></li>
            </ul>
          </div>
        </div>
  </header>

  `,
  styleUrl: './inicio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
