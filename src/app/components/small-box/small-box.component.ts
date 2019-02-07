import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-box',
  templateUrl: './small-box.component.html',
  styleUrls: ['./small-box.component.css']
})
export class SmallBoxComponent implements OnInit {

  @Input() value: Number;
  @Input() title: String;
  @Input() icon: String;
  @Input() color: String;
  constructor() { }

  ngOnInit() {
  }

}
