import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Integrador } from './integrador';

describe('Integrador', () => {
  let component: Integrador;
  let fixture: ComponentFixture<Integrador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Integrador],
    }).compileComponents();

    fixture = TestBed.createComponent(Integrador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
