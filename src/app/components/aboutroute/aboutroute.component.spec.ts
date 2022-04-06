import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutrouteComponent } from './aboutroute.component';

describe('AboutrouteComponent', () => {
  let component: AboutrouteComponent;
  let fixture: ComponentFixture<AboutrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutrouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
