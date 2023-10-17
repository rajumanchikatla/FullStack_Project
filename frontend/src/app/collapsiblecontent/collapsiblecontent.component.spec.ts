import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsiblecontentComponent } from './collapsiblecontent.component';

describe('CollapsiblecontentComponent', () => {
  let component: CollapsiblecontentComponent;
  let fixture: ComponentFixture<CollapsiblecontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollapsiblecontentComponent]
    });
    fixture = TestBed.createComponent(CollapsiblecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
