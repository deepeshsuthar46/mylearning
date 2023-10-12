import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCompComponent } from './slider-comp.component';

describe('SliderCompComponent', () => {
  let component: SliderCompComponent;
  let fixture: ComponentFixture<SliderCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderCompComponent]
    });
    fixture = TestBed.createComponent(SliderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
