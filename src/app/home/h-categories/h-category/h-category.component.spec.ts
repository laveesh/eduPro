import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HCategoryComponent } from './h-category.component';

describe('HCategoryComponent', () => {
  let component: HCategoryComponent;
  let fixture: ComponentFixture<HCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
