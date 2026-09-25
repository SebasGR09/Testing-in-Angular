import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { notNullNameValidator } from './validators/notNullNameValidator';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-integrador',
  styleUrl: './integrador.css',
  templateUrl: './integrador.html',
})
export class Integrador {
  count: number = 0;
  saveName:string = "";
  modal:boolean = false;
  error: string = "";
  colorBodyError: string = "#00000099";

  renderer = inject(Renderer2);
  el = inject(ElementRef);

  name: FormControl = new FormControl("", [Validators.required, notNullNameValidator, Validators.minLength(3)]);


  changeName(newName: string): void{
    this.saveName = newName;
  }

  changeColor(color: string){
    this.renderer.setStyle(document.body, "background-color", color);
  }

  add(): void {
    this.count ++;
  }

  rest(): void {
    if(this.count > 0){
      this.count --;
    }
    else{
      this.modal = true;
      this.changeColor(this.colorBodyError);
      this.error = "El limite es 0"
    }
  }

  closeModal(){
    this.changeColor("#FFFFFF");
    this.modal = false;
    
  }

}
