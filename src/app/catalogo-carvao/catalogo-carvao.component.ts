import { Component } from '@angular/core';
interface Carvao {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}
@Component({
  selector: 'app-catalogo-carvao',
  templateUrl: './catalogo-carvao.component.html',
  styleUrl: './catalogo-carvao.component.css'
})
export class CatalogoCarvaoComponent {
  carvao: Carvao[] = [
    {
      id: 1,
      name: 'Fumax 1kg',
      price: 50.00,
      imageUrl: 'fumax1kg.webp'
    },
    {
      id: 2,
      name: 'Smartcoco 1kg',
      price: 30.00      ,
      imageUrl: 'smartcoco1kg.jpeg'
    },
    {
      id: 3,
      name: 'Duham 1kg',
      price: 35.00,
      imageUrl: 'onix.webp'
    }
  ];
}
