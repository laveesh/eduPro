import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAvailedComponent } from './courses-availed.component';

describe('CoursesAvailedComponent', () => {
  let component: CoursesAvailedComponent;
  let fixture: ComponentFixture<CoursesAvailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesAvailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesAvailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
