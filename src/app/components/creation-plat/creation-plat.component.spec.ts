import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationPlatComponent } from './creation-plat.component';

describe('CreationPlatComponent', () => {
  let component: CreationPlatComponent;
  let fixture: ComponentFixture<CreationPlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreationPlatComponent]
    });
    fixture = TestBed.createComponent(CreationPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
