import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
          <div class="relleno"></div>

    <nav>
      <ul class="paneles">
        <li><a href="">Inicio</a></li>
        <li><a href="">Nosotros</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contactanos</a></li>
      </ul>
      <ul class="redes-sociales">
        <li><a href=""><img src="icons/facebook.svg" alt=""></a></li>
        <li><a href=""><img src="icons/twitter.svg" alt=""></a></li>
        <li><a href=""><img src="icons/youtube.svg" alt=""></a></li>
        <li><a href=""><img src="icons/pinterest.svg" alt=""></a></li>
        <li><a href=""><img src="icons/behance.svg" alt=""></a></li>
      </ul>
      <button class="buscador">
        <img class="search" src="icons/search.svg" alt="menu">
      </button>
      <input type="text" placeholder="buscador">
    </nav>
  `,
  styleUrl: './navegacion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavegacionComponent { }
