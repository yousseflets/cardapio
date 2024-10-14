import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/']).then(() => {
      window.scrollTo(0, 0); // Rola para o topo da página
    });
  }

  scrollToPods() {
    const catalogPod = document.getElementById('catalog-pod');
    if (catalogPod) {
      catalogPod.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollTogEssencias() {
    const catalogEssencias = document.getElementById('catalog-essencias');
    if (catalogEssencias) {
      catalogEssencias.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollTogCarvao() {
    const catalogCarvao = document.getElementById('catalog-carvao');
    if (catalogCarvao) {
      catalogCarvao.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollTogAluminio() {
    const catalogAluminio = document.getElementById('catalog-aluminio');
    if (catalogAluminio) {
      catalogAluminio.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollTogFogareiro() {
    const catalogFogareiro = document.getElementById('catalog-fogareiro');
    if (catalogFogareiro) {
      catalogFogareiro.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
