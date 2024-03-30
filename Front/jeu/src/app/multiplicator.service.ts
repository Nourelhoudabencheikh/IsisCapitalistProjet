import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplicatorService {
  private _multiplicateurValue: number = 1;

  constructor() { }

  get multiplicateurValue(): number {
    return this._multiplicateurValue;
  }

  set multiplicateurValue(value: number) {
    this._multiplicateurValue = value;
  }
}
