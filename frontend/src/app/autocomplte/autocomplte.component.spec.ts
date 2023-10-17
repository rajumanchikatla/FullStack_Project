import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocomplteComponent } from './autocomplte.component';

describe('AutocomplteComponent', () => {
  let component: AutocomplteComponent;
  let fixture: ComponentFixture<AutocomplteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocomplteComponent]
    });
    fixture = TestBed.createComponent(AutocomplteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
