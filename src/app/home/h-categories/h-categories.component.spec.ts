import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HCategoriesComponent } from './h-categories.component';

describe('HCategoriesComponent', () => {
  let component: HCategoriesComponent;
  let fixture: ComponentFixture<HCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
