import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Workshop2Component } from './workshop2.component';

describe('Workshop2Component', () => {
  let component: Workshop2Component;
  let fixture: ComponentFixture<Workshop2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Workshop2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Workshop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
