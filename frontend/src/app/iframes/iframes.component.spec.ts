import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframesComponent } from './iframes.component';

describe('IframesComponent', () => {
  let component: IframesComponent;
  let fixture: ComponentFixture<IframesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IframesComponent]
    });
    fixture = TestBed.createComponent(IframesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
