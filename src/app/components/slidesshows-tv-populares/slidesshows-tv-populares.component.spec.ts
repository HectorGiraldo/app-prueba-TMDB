import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesshowsTvPopularesComponent } from './slidesshows-tv-populares.component';

describe('SlidesshowsTvPopularesComponent', () => {
  let component: SlidesshowsTvPopularesComponent;
  let fixture: ComponentFixture<SlidesshowsTvPopularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesshowsTvPopularesComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesshowsTvPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
