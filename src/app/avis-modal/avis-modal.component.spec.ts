import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisModalComponent } from './avis-modal.component';

describe('AvisModalComponent', () => {
  let component: AvisModalComponent;
  let fixture: ComponentFixture<AvisModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisModalComponent]
    });
    fixture = TestBed.createComponent(AvisModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
