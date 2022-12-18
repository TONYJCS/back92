import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarArtistaComponent } from './guardar-artista.component';

describe('GuardarArtistaComponent', () => {
  let component: GuardarArtistaComponent;
  let fixture: ComponentFixture<GuardarArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarArtistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
