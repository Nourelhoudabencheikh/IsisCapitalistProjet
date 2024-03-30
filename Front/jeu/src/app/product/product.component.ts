import { Component, Input, SimpleChanges } from '@angular/core';
import { Product } from '../world';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  product : any = new Product()
 
  @Input()
  money :any
 
  vitesse = this.product.vitesse
  run = false
  initialValue = 0
  auto = false
  //orientation = Orientation.horizontal
 
 
 ngOnChanges(changes: SimpleChanges){
   if(changes["product"]){
     this.initialValue = this.product.timeleft
     this.vitesse = this.product.vitesse
   }
 }

 
}
