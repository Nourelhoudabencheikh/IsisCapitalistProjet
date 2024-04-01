import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMComponent } from './modal-m.component';

describe('ModalMComponent', () => {
  let component: ModalMComponent;
  let fixture: ComponentFixture<ModalMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
