import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdQuizesComponent } from './ud-quizes.component';

describe('UdQuizesComponent', () => {
  let component: UdQuizesComponent;
  let fixture: ComponentFixture<UdQuizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdQuizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdQuizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
