import { Component } from '@angular/core';
interface Aluminio {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}
@Component({
  selector: 'app-catalogo-aluminio',
  templateUrl: './catalogo-aluminio.component.html',
  styleUrl: './catalogo-aluminio.component.css'
})
export class CatalogoAluminioComponent {
  aluminio: Aluminio[] = [
    {
      id: 1,
      name: 'Stan 50 folhas',
      price: 14.00,
      imageUrl: 'aluminio.png'
    },
  ];
}
