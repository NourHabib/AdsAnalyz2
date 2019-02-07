import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvsMenuComponent } from './advs-menu.component';

describe('AdvsMenuComponent', () => {
  let component: AdvsMenuComponent;
  let fixture: ComponentFixture<AdvsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
