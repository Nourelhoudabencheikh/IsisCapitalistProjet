import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChouchouComponent } from './chouchou.component';

describe('ChouchouComponent', () => {
  let component: ChouchouComponent;
  let fixture: ComponentFixture<ChouchouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChouchouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChouchouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
