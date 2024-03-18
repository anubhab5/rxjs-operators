import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfOpComponent } from './of-op.component';

describe('OfOpComponent', () => {
  let component: OfOpComponent;
  let fixture: ComponentFixture<OfOpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfOpComponent]
    });
    fixture = TestBed.createComponent(OfOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
