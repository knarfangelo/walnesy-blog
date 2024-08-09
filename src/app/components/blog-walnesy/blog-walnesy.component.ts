import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InicioComponent } from "../inicio/inicio.component";
import { NoticiasComponent } from "../noticias/noticias.component";
import { FooterComponent } from "../footer/footer.component";
import { UltimaHoraComponent } from "../ultima-hora/ultima-hora.component";

@Component({
  selector: 'app-blog-walnesy',
  standalone: true,
  imports: [
    CommonModule,
    InicioComponent,
    NoticiasComponent,
    FooterComponent,
    UltimaHoraComponent
],
  template: `
  <header>
    <app-inicio></app-inicio>
    <app-noticias></app-noticias>
    <app-ultima-hora></app-ultima-hora>
    <app-footer></app-footer>

  </header>

  `,
  styleUrl: './blog-walnesy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogWalnesyComponent { }
