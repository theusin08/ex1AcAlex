import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  constructor() {}
  valorConta = 0;
  valorRange = 0;
  valorFinal = 10;
  alertButtons = ['OK'];



  fazerCalculo() {
    this.valorFinal =
      this.valorConta +
      (this.valorFinal = this.valorConta * (this.valorRange / 100));
  }

  onIonChange(ev: RangeCustomEvent) {
    this.valorRange = parseInt(ev.detail.value.toString());
  }


}
