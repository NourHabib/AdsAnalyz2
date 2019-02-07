import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Adv } from '../../objects/adv';
import { AdvsServiceService } from '../../services/advs-service.service';

@Component({
  selector: 'app-advs-menu',
  templateUrl: './advs-menu.component.html',
  styleUrls: ['./advs-menu.component.css']
})
export class AdvsMenuComponent implements OnInit {

  advItems: Adv[];
  selectedAdv: Adv;
  isActive: Boolean = false;

  @Output() advSelected: EventEmitter<Adv> = new EventEmitter();

  constructor(private advService: AdvsServiceService) { }

  ngOnInit() {
    this.getAdvs();
  }
  getAdvs(): void {
    this.advService.getAdvs().subscribe(advs => this.advItems = advs);
  }
  selectAdv(adv): void {
    this.selectedAdv = adv;
    this.isActive = false;
    this.advSelected.emit(this.selectedAdv);
  }
  menuToggle(): boolean {
    this.isActive = !this.isActive;
    return false;
  }
}
