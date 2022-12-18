import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarArtistaComponent } from './modificar-artista.component';

describe('ModificarArtistaComponent', () => {
  let component: ModificarArtistaComponent;
  let fixture: ComponentFixture<ModificarArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarArtistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
