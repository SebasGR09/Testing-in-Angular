import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Saludo } from './saludo';

describe('Saludo', () => {
  let component: Saludo;
  let fixture: ComponentFixture<Saludo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saludo],
    }).compileComponents();

    fixture = TestBed.createComponent(Saludo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('incluye saludo', () => {
    const valueTs = component.saludo;
    expect(valueTs).toBe("Hola");
  })

  it("show saludo in html", () => {
    const valueHtml: HTMLElement = fixture.nativeElement;
    const textHtml = valueHtml.querySelector("h1")?.textContent;

    expect(textHtml).toBe("Hola a todo el mundo");
  })

  it('user input name', ()=> {
    const inputHTML: HTMLElement = fixture.nativeElement;
    const input = inputHTML.querySelector('input')!;

    input.value = "Sasuke";

    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe("Sasuke"); 
  })

  it('aumenta contador', async() => {
    const countHtml: HTMLElement = fixture.nativeElement;
    const countButton = countHtml.querySelector('button')!;

    countButton?.dispatchEvent(new Event('click'));

    await fixture.whenStable();

    expect(component.count).toBe(1);
  })

  it("disminuye contador", async()=> {
    const html: HTMLElement = fixture.nativeElement;
    const button = html.getElementsByClassName('minus');    // devuelve una coleccion, por lo que toca seccionarlo [0]

    button[0].dispatchEvent(new Event('click'));

    await fixture.whenStable();

    expect(component.count).toBe(-1);
  })


  it("change name h1", async() => {
    const html:HTMLElement = fixture.nativeElement;
    const textH1 = html.getElementsByClassName('name');
    const button = html.getElementsByClassName('changeName');

    button[0].dispatchEvent(new Event("click"));

    await fixture.whenStable();   // Esperemos que se termine de hacer el trabajo y hacemos seguimos despues

    expect(textH1[0].textContent).toBe('Nombre: Hola');
  })

});
