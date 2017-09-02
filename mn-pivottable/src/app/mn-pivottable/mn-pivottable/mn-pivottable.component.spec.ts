import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnPivottableComponent } from './mn-pivottable.component';

describe('MnPivottableComponent', () => {
  let component: MnPivottableComponent;
  let fixture: ComponentFixture<MnPivottableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnPivottableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnPivottableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
