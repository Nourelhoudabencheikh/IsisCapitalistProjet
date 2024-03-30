import { Injectable } from '@angular/core';
import { Pallier, Product } from './world';
import { ACHETER_PRODUIT, BACKEND, ENGAGER_MANAGER, GET_WORLD, LANCER_PRODUCTION, UTILISER_UNLOCK } from './request';
import { Client, fetchExchange } from '@urql/core';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  server = BACKEND + "graphql";
  user = 'ISIS';

  constructor() { }

  createClient() {
    return new Client({
    url: this.server,
    exchanges: [fetchExchange],
    fetchOptions: () => {
    return {
    headers: {'x-user': this.user},
    };
    },
  });
}

getWorld() {
  return this.createClient().query(GET_WORLD, {}).toPromise();
 }

getUsername() {
  if (localStorage.getItem("username")) {
    this.user = localStorage.getItem("username")!;
  }
}

launchProduction(product : Product) {
  return this.createClient().mutation(LANCER_PRODUCTION, { id:
    product.id}).toPromise();
}

engagerManager(pallier : Pallier) {
  return this.createClient().mutation(ENGAGER_MANAGER, {name: pallier.name}).toPromise();

}

acheterQtProduit(product: Product, qt : number) {
  return this.createClient().mutation(ACHETER_PRODUIT, {id :product, quantite: qt}).toPromise();
}

userUnlock (unlock : Pallier) {
  return this.createClient().mutation(UTILISER_UNLOCK, {name: unlock.name}).toPromise();
}

}
