import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimedetalleComponent } from './animedetalle.component';

describe('AnimedetalleComponent', () => {
  let component: AnimedetalleComponent;
  let fixture: ComponentFixture<AnimedetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimedetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimedetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
