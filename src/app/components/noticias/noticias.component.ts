import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>Noticias del Partido</h1>
      <main>
        <div>
          
        </div>
        <div></div>
      </main>
      
    </header>
  `,
  styleUrl: './noticias.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiasComponent { }
