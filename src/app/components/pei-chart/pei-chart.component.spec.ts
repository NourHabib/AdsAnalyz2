import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeiChartComponent } from './pei-chart.component';

describe('PeiChartComponent', () => {
  let component: PeiChartComponent;
  let fixture: ComponentFixture<PeiChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeiChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
