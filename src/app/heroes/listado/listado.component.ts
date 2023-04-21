import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
 heroes:string[]=[
  'Spiderman',
  'Ironman',
  'Hulk',
  'AntMan',
  'Flash'

 ];
 heroeBorrado:string='';
 eliminarHeroe():void{
  this.heroeBorrado= this.heroes.pop() ||'';
 }
}
