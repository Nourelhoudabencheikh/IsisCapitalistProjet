import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChouchouComponent } from './chouchou/chouchou.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChouchouComponent,ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jeu';
}
