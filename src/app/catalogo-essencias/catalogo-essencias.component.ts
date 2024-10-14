import { Component } from '@angular/core';
interface Essencias {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}
@Component({
  selector: 'app-catalogo-essencias',
  templateUrl: './catalogo-essencias.component.html',
  styleUrl: './catalogo-essencias.component.css'
})
export class CatalogoEssenciasComponent {
  essencias: Essencias[] = [
    {
      id: 1,
      name: 'Ziggy ',
      price: 10.00,
      imageUrl: 'ziggy.jpg'
    },
    {
      id: 2,
      name: 'Magic ',
      price: 10.00      ,
      imageUrl: 'magic.JPG'
    },
    {
      id: 3,
      name: 'Onix',
      price: 10.00,
      imageUrl: 'onix.webp'
    },
    {
      id: 4,
      name: 'Nay',
      price: 10.00,
      imageUrl: 'nay.webp'
    },
    {
      id: 5,
      name: 'Ignite essência',
      price: 10.00,
      imageUrl: 'ignite.jpg'
    },
    {
      id: 6,
      name: 'Mr. Luky',
      price: 12.00,
      imageUrl: 'mrlucky.webp'
    },
    {
      id: 7,
      name: 'Smyrna',
      price: 10.00,
      imageUrl: 'smyrna2.jpeg'
    },
    {
      id: 8,
      name: 'Adalya',
      price: 15.00,
      imageUrl: 'adalya.JPG'
    },

  ];
}
