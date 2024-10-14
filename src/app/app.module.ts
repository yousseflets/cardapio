import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

// Importação do RouterModule
import { RouterModule, Routes } from '@angular/router';

// Importações do Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CatalogoPodComponent } from './catalogo-pod/catalogo-pod.component';
import { CatalogoEssenciasComponent } from './catalogo-essencias/catalogo-essencias.component';
import { CatalogoCarvaoComponent } from './catalogo-carvao/catalogo-carvao.component';
import { CatalogoAluminioComponent } from './catalogo-aluminio/catalogo-aluminio.component';
import { CatalogoFogareiroComponent } from './catalogo-fogareiro/catalogo-fogareiro.component';

// Importação dos componentes das rotas
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ServicesComponent } from './services/services.component';
// import { ContactComponent } from './contact/contact.component';

// Configuração das rotas
const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'services', component: ServicesComponent },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    CatalogoPodComponent,
    CatalogoEssenciasComponent,
    CatalogoCarvaoComponent,
    CatalogoAluminioComponent,
    CatalogoFogareiroComponent,
    // HomeComponent,      // Certifique-se de declarar seus componentes
    // AboutComponent,
    // ServicesComponent,
    // ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes)  // Importar o RouterModule com as rotas configuradas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
