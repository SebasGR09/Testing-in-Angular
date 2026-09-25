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


  // Existe el formcontrol y el input?
  it("exist form control", () => {
    const html:HTMLElement = fixture.nativeElement;
    const input = html.getElementsByClassName('inputNameNew')[0];
    const formControl = component.name;

    expect(input && formControl).toBeTruthy();

  })

  // El usuario puede escribir en el input?
  it("user write in input text", async() => {
    const html: HTMLElement = fixture.nativeElement;
    const input = html.querySelector('input')!;

    input.value = "Sasuke";

    input.dispatchEvent(new Event('input'));
    expect(input.value).toBe('Sasuke')

  })


  // Realizar click en guardar (El orden de las declaraciones afecta muchisimo)
  it('save name is correct', () => {
    const html: HTMLElement = fixture.nativeElement;
    const buttonSave = html.querySelector('button');
    const input = html.querySelector('input')!;
    
    input.value = "Sebas";

    input.dispatchEvent(new Event('input'));

    buttonSave?.dispatchEvent(new Event('click'));

    const nameSaved = component.saveName;     // Aqui ya deberiamos tener el nombre

    expect(nameSaved).toBe("Sebas");
  })
});
