import { Component } from '@angular/core';
interface Fogareiro {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}
@Component({
  selector: 'app-catalogo-fogareiro',
  templateUrl: './catalogo-fogareiro.component.html',
  styleUrl: './catalogo-fogareiro.component.css'
})
export class CatalogoFogareiroComponent {
  fogareiro: Fogareiro[] = [
    {
      id: 1,
      name: 'Fogareiro Pequeno',
      price: 25.00,
      imageUrl: 'fogareiroPequeno.webp'
    },
    {
      id: 2,
      name: 'Fogareiro Grande',
      price: 25.00,
      imageUrl: 'fogareiroGrande.jpeg'
    },
  ];
}
