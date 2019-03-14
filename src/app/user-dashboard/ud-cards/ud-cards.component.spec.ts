import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdCardsComponent } from './ud-cards.component';

describe('UdCardsComponent', () => {
  let component: UdCardsComponent;
  let fixture: ComponentFixture<UdCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
