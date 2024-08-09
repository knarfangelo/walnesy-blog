import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { INoticias } from './BDNoticias/INoticias';
import { noticiasJSON } from './BDNoticias/noticiasJSON';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <header>
      <h1>Noticias del Partido</h1> <main>
      @for (item of items; track $index) {
      
        <div class="noticia">
          <img src="panel-principal.jpg" alt="">
          <p class="fecha">{{item.date}}</p>
          <h2>{{item.name}}</h2>
          <p>{{item.description}}</p>
        
          <a href="{{item.link}}" target="_blank">Leer más</a>
        </div>
      }
      </main> 
    </header>
  `,
  styleUrl: './noticias.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiasComponent { 

  items:INoticias[] = noticiasJSON;

}
