import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tests } from './tests';

describe('Tests', () => {
  let component: Tests;
  let fixture: ComponentFixture<Tests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tests],
    }).compileComponents();

    fixture = TestBed.createComponent(Tests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('html value 5', async() => {
    const html:HTMLElement = fixture.nativeElement;
    const valueHtml = html.getElementsByClassName('value')[0];
    await fixture.whenStable();
    expect(valueHtml.textContent).toBe("5");
  })

  it('component value 5', async() => {
    const valueComponent = component.count;

    await fixture.whenStable();
    expect(valueComponent).toBe(5);
  })

  it('add Button Working', async() => {
    const html: HTMLElement = fixture.nativeElement;
    const button = html.getElementsByClassName('plus')[0];

    button.dispatchEvent(new Event('click'));

    await fixture.whenStable();

    expect(component.count).toBe(6);
  })


  it('change Name is working', async() => {
    const html:HTMLElement = fixture.nativeElement;
    const valueHTML = html.getElementsByClassName('welcome')[0];
    const button = html.getElementsByClassName('changeName')[0];

    button.dispatchEvent(new Event('click'));

    await fixture.whenStable();

    expect(valueHTML.textContent).toBe('Nombre: ReoNa');  // Lo mejor es agarrar el valor actual, no con el que se agarra
  })


  it('input password exist', () => {
    const html: HTMLElement = fixture.nativeElement;
    const input = html.getElementsByClassName('password')[0];
    expect(input).toBeTruthy();
  })

  it('data in input', async() => {
    const html: HTMLElement = fixture.nativeElement;
    const input = html.querySelector('input')!;

    input.value = "Reo";

    input.dispatchEvent(new Event("input"));

    await fixture.whenStable();

    expect(input.value).toBe('Reo');

  })

});
