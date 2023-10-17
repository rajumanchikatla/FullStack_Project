import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipletabsComponent } from './multipletabs.component';

describe('MultipletabsComponent', () => {
  let component: MultipletabsComponent;
  let fixture: ComponentFixture<MultipletabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultipletabsComponent]
    });
    fixture = TestBed.createComponent(MultipletabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
