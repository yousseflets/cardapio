import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    '/banner1.png',
    // '/banner2.png',
    // '/banner3.png',
    // '/banner4.png'
  ];
  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
