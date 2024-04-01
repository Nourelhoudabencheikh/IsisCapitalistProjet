import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUComponent } from './modal-u.component';

describe('ModalUComponent', () => {
  let component: ModalUComponent;
  let fixture: ComponentFixture<ModalUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
