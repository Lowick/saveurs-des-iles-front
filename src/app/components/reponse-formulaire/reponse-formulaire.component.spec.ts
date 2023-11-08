import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseFormulaireComponent } from './reponse-formulaire.component';

describe('ReponseFormulaireComponent', () => {
  let component: ReponseFormulaireComponent;
  let fixture: ComponentFixture<ReponseFormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReponseFormulaireComponent]
    });
    fixture = TestBed.createComponent(ReponseFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
