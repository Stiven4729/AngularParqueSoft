import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotonesComponent } from './botones.component';
import { }  from '@angular/material/slide-toggle';

describe('BotonesComponent', () => {
  let component: BotonesComponent;
  let fixture: ComponentFixture<BotonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonesComponent]
    });
    fixture = TestBed.createComponent(BotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
