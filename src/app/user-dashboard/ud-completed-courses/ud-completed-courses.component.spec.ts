import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdCompletedCoursesComponent } from './ud-completed-courses.component';

describe('UdCompletedCoursesComponent', () => {
  let component: UdCompletedCoursesComponent;
  let fixture: ComponentFixture<UdCompletedCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdCompletedCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdCompletedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
