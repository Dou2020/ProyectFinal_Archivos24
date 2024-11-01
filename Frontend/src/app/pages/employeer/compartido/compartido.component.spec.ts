import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartidoComponent } from './compartido.component';

describe('CompartidoComponent', () => {
  let component: CompartidoComponent;
  let fixture: ComponentFixture<CompartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompartidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
