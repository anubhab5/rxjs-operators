import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOpComponent } from './from-op.component';

describe('FromOpComponent', () => {
  let component: FromOpComponent;
  let fixture: ComponentFixture<FromOpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromOpComponent]
    });
    fixture = TestBed.createComponent(FromOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
