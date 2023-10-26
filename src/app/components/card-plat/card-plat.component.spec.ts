import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlatComponent } from './card-plat.component';

describe('CardPlatComponent', () => {
  let component: CardPlatComponent;
  let fixture: ComponentFixture<CardPlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPlatComponent]
    });
    fixture = TestBed.createComponent(CardPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
