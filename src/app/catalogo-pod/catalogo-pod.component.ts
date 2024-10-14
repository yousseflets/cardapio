import { Component } from '@angular/core';

interface Pod {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-catalogo-pod',
  templateUrl: './catalogo-pod.component.html',
  styleUrl: './catalogo-pod.component.css'
})
export class CatalogoPodComponent {
  pod: Pod[] = [
    {
      id: 1,
      name: 'Elfbar 25000',
      price: 120.00,
      imageUrl: 'elfbar25k.jpg'
    },
    {
      id: 2,
      name: 'Ignite 5000',
      price: 78.00      ,
      imageUrl: 'ignite5k.webp'
    },
    {
      id: 3,
      name: 'Ignite 15000',
      price: 130.00,
      imageUrl: 'ignite15k.png'
    },
    {
      id: 4,
      name: 'Ignite 8000',
      price: 95.00,
      imageUrl: 'ignite8k.jpeg'
    },
    {
      id: 5,
      name: 'Instabar 15000',
      price: 105.00,
      imageUrl: 'instabar15k.webp'
    },
    {
      id: 6,
      name: 'Oxbar 30000',
      price: 110.00,
      imageUrl: 'oxbar30k.webp'
    },
    {
      id: 7,
      name: 'Vapesoul 12000',
      price: 75.00,
      imageUrl: 'vapesoul12k.webp'
    },
    {
      id: 8,
      name: 'Lost Mary 20000',
      price: 100.00,
      imageUrl: 'lsotmary20k.jpeg'
    },

  ];
}
