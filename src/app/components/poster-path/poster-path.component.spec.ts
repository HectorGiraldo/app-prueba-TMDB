import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterPathComponent } from './poster-path.component';

describe('PosterPathComponent', () => {
  let component: PosterPathComponent;
  let fixture: ComponentFixture<PosterPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterPathComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
