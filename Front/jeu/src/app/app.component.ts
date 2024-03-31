import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { BACKEND } from './request';
import { Pallier, Product, World } from './world';
import { WebService } from './web.service';
import { MyProgressBarComponent } from './my-progress-bar/my-progress-bar.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BigvaluePipe } from './bigvalue.pipe';
import { MultiplicatorService } from './multiplicator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent, MyProgressBarComponent, NgFor, NgIf, FormsModule, BigvaluePipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jeu';

  username: string = '';
  api: String = 'https://isiscapitalistgraphql.kk.kurasawa.fr/graphql';
  //server: String = 'http://localhost:4000/'

  showManagersSection = false;
  showUnlocksSection = false;

  showContent = true;
  world: World = new World();

  constructor(private service: WebService, private router: Router, public multiplicator: MultiplicatorService) {
    this.multiplicator = multiplicator;
    this.getUsername();

    this.service.getWorld().then(
      world => {
        this.world = world.data.getWorld;
      }
    );
  }

  changeVitesse() {
    //this.world.products[0]={
    // ...this.world.products[0].vitesse : this.newvitesse
    //}
  }

  worldName!: string;
  playerMoney!: number;
  playerName!: string;
  purchaseQuantity!: number;
  products!: any[];

  ngOnInit(): void {
    this.service.getWorld().then(world => {
      this.worldName = world.data.name;
      this.playerMoney = world.data.money;
      this.products = world.data.products;
    });
    console.log(this.username)
  }

  buyProduct(product: Product): void {
    this.service.acheterQtProduit(product, this.purchaseQuantity);
  }

  showUpgrades(): void {
    // Implement logic to show upgrades window
  }

  showUnlocks(): void {
    // Implement logic to show unlocks window
  }

  showManagers(): void {
    // Implement logic to show managers window
  }

  getUsername() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.username = window.localStorage.getItem("username") || '';
    }
    console.log(this.username)
  }

  onUsernameChanged() {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem("username", this.username);
    }
    console.log(this.username)
  }

  reloadPage() {
    this.router.navigate(['.']).then(() => {
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    });
  }

  toggleManagersSection() {
    this.showManagersSection = !this.showManagersSection;
  }

  toggleUnlocksSection() {
    this.showUnlocksSection = !this.showUnlocksSection;
  }

  engagerManager(manager: Pallier) {
    this.service.engagerManager(manager).catch(reason =>
      console.log("erreur: " + reason)
    );
  }
  userUnlock(unlock: Pallier) {
    this.service.userUnlock(unlock).catch(reason =>
      console.log("erreur: " + reason)
    );
  }

  onMultiplicateurClick() {
    if (this.multiplicator.multiplicateurValue === 1) {
      this.multiplicator.multiplicateurValue = 10;
    } else if (this.multiplicator.multiplicateurValue === 10) {
      this.multiplicator.multiplicateurValue = 100;
    } else {
      // Si le multiplicateur est à 100, revenir à 1
      this.multiplicator.multiplicateurValue = 1;
    }
  }

  onProductionDone(p: Product) {
    this.world.score += p.revenu
    this.world.money += p.revenu
  }

  onBuy(coutTot: number) {
    this.world.money -= coutTot * this.multiplicator.multiplicateurValue;
  }

  
}