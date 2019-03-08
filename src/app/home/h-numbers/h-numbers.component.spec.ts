import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HNumbersComponent } from './h-numbers.component';

describe('HNumbersComponent', () => {
  let component: HNumbersComponent;
  let fixture: ComponentFixture<HNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
