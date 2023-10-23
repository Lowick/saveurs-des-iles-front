import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppressionPlatComponent } from './suppression-plat.component';

describe('SuppressionPlatComponent', () => {
  let component: SuppressionPlatComponent;
  let fixture: ComponentFixture<SuppressionPlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuppressionPlatComponent]
    });
    fixture = TestBed.createComponent(SuppressionPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
