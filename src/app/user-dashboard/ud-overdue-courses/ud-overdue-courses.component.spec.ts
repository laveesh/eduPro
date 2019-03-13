import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdOverdueCoursesComponent } from './ud-overdue-courses.component';

describe('UdOverdueCoursesComponent', () => {
  let component: UdOverdueCoursesComponent;
  let fixture: ComponentFixture<UdOverdueCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdOverdueCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdOverdueCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
