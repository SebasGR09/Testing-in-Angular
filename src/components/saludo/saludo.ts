import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-saludo',
  styleUrl: './saludo.css',
  templateUrl: './saludo.html',
})
export class Saludo {
  saludo: string = "Hola a todo el mundo";
  name:string =  "ReoNa";
  count:number = 0;

  addCount(){
    this.count ++;
  }

  restCount(){
    this.count --;
  }

  changeName(){
    this.name = "Hola";
  }

}
