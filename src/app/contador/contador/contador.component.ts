import {Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{titulo}}</h1>
<h1>La base es: {{base}}</h1>
<button (click)="acumular(base)">+1</button>
<span>{{numero}}</span>
<button (click)="acumular(-base)">-1</button>
  `
})
export class ContadorComponent{
  public titulo:string = 'ContadorAPP';
  public numero:number=10;
  // sumar(){
  //   this.numero++;
  // }
  // restar(){
  //   this.numero--;
  // }
  public base:number=5;
  acumular(base:number){
    this.numero+=base;
  }
}
