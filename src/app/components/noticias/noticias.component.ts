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
      <nav>
        <ul>
          <li><button>Todos</button></li>
          <li><button>Aventura</button></li>
          <li><button>Tecnologia</button></li>
        </ul>
      </nav>
      
    </header>
  `,
  styleUrl: './noticias.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiasComponent { }
