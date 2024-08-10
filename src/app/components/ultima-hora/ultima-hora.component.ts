import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { noticiasJSON } from '../noticias/BDNoticias/noticiasJSON';
import { INoticias } from '../noticias/BDNoticias/INoticias';

@Component({
  selector: 'app-ultima-hora',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
     <header>
      <h1>Última hora</h1> <main>
      @for (item of items; track $index) {
      
        <div class="noticia">
          <img class="imagenes" [src]="item.img" alt="">
          <p class="fecha">{{item.date}}</p>
          <h2>{{item.name}}</h2>
          <p>{{item.description}}</p>
        
          <a href="{{item.link}}" target="_blank">Leer más</a>
        </div>
      }
      </main> 
    </header>
    
  `,
  styleUrl: './ultima-hora.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UltimaHoraComponent { 
  items:INoticias[] = noticiasJSON.slice(0, 3);
 }
