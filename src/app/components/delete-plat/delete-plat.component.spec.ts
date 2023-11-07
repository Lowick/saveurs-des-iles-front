import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlatComponent } from './delete-plat.component';

describe('DeletePlatComponent', () => {
  let component: DeletePlatComponent;
  let fixture: ComponentFixture<DeletePlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePlatComponent]
    });
    fixture = TestBed.createComponent(DeletePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
