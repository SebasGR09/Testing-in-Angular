import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tests',
  styleUrl: './tests.css',
  templateUrl: './tests.html',
})
export class Tests {
  count: number = 5;
  name: string = "";

  add(): void{
    this.count++;
  }

  changeName(): void {
    this.name = "ReoNa";
  }

}
