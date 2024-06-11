import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomService {
  private _random = 0;

  constructor() {
    console.log('Random Services Created....');
    this._random = Math.floor(Math.random() * 1000);
  }
  get random() {
    return this._random;
  }
}
