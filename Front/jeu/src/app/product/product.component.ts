import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Product } from '../world';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyProgressBarComponent, Orientation } from '../my-progress-bar/my-progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { WebService } from '../web.service';
import { MultiplicatorService } from '../multiplicator.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatProgressBarModule,MyProgressBarComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  product : any = new Product()
 
  @Input()
  set money(value: number) {
    this._money = value;

    console.log("this is money",this._money);
  } 
  @Input()
  set produit(value: Product) {
    this.product = value;
    if (!this.product) this.product = new Product()
    // console.log(this.product)
  }


  _money: number =0;
  vitesse = this.product.vitesse
  run = false
  initialValue = 0
  auto = false
  orientation = Orientation.horizontal
  progressbarvalue=0;
  lastupdate = Date.now();

  server : String='http://localhost:4000/graphql';
  api="https://isiscapitalistgraphql.kk.kurasawa.fr/";


  
  
 

  ngOnInit(){
    setInterval(() => {
      this.calculScore();
    }, 100);
    console.log(this.product)

  }

  constructor(private service: WebService, public multiplicator : MultiplicatorService) {
  }


  ngOnChanges(changes: SimpleChanges){
    if(changes["product"]){
    this.initialValue = this.product.timeleft
    this.vitesse = this.product.vitesse
    }
  }

  lancerProduction(product : Product){
    if (this.product.timeleft == 0) {
      this.run = true
      this.product.timeleft = this.product.vitesse
      this.product.lastupdate = Date.now()
      this.service.launchProduction(this.product).catch(reason =>
        console.log("erreur: " + reason));
    }
  }


  acheterQtProduit(product : Product){
    if(this._money >= this.multiplicator.multiplicateurValue * this.product.cout){

    console.log(product);
    console.log(this.product)
    this.service.acheterQtProduit(this.product.id, this.multiplicator.multiplicateurValue ).catch(reason =>
    console.log("erreur: " + reason))
    this.notifyBuy.emit(this.product.cout);
    }
  }


  calculScore() {
    let elapsedTime = Date.now() - this.product.lastupdate;
    if (!this.product.managerUnlocked) { 
      if (this.product.timeleft !== 0) { 
        this.product.lastupdate = Date.now(); 
        if (this.product.timeleft <= elapsedTime) { 
          this.product.timeleft = 0;
          this.notifyProduction.emit(this.product);
          this.run = false;
        } else {
          this.product.timeleft -= elapsedTime; 
          this.progressbarvalue = ((this.product.vitesse - this.product.timeleft) / this.product.vitesse) * 100;
        }
      }
    } else { 
      let createdObjects = Math.floor(elapsedTime / this.product.vitesse);
      this.product.timeleft = this.product.vitesse - (elapsedTime % this.product.vitesse);
      for (let i = 0; i < createdObjects; i++) {
        this.notifyProduction.emit(this.product);
      }
      this.product.lastupdate = Date.now();
    }
  }

  @Output() notifyProduction: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() notifyBuy: EventEmitter<any> = new EventEmitter<any>();
  

  BuyProduct(){
   /* if(this._money >= this.multiplicator.multiplicateurValue * this.product.cout){
      this.product.quantite += this.multiplicator.multiplicateurValue
      let coutTot= this.multiplicator.multiplicateurValue * this.product.cout
      this.notifyBuy.emit(coutTot);
      this.acheterQtProduit(this.product);
      
    }else{
  
    }*/

    if(this.product.timeleft == 0) {
      this.service.launchProduction(this.product).catch(reason =>
        console.log("Erreur : " + reason)
      );
      this.product.timeleft = this.product.vitesse;
      this.run = true;
      this.product.lastupdate = Date.now().toString();
    }
  }
  
    setProgress(value: number) {
      if (value >= 0 && value <= 100) {
        this.progressbarvalue = value;
      } else if (value < 0) {
        this.progressbarvalue = 0;
      } else {
        this.progressbarvalue = 100;
      }
    }

 
}
