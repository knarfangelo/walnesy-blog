import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InicioComponent } from "../inicio/inicio.component";

@Component({
  selector: 'app-blog-walnesy',
  standalone: true,
  imports: [
    CommonModule,
    InicioComponent
],
  template: `
    <app-inicio></app-inicio>
  `,
  styleUrl: './blog-walnesy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogWalnesyComponent { }
