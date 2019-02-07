import { Component } from '@angular/core';
import { Adv } from './objects/adv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kayzen';

  public selectedAdv: Adv;

  childAdvSelected(adv: Adv) {
    this.selectedAdv = adv;
  }
}
