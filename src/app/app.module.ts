<<<<<<< HEAD
import { NgModule } from '@angular/core';
=======
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
>>>>>>> page-example
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselOpinionComponent } from './components/carousel-opinion/carousel-opinion.component';
=======
import { SwiperModule } from 'swiper/angular';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ModalAccesoComponent } from './components/modal-acceso/modal-acceso.component';
>>>>>>> page-example

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
<<<<<<< HEAD
    CarouselComponent,
    CarouselOpinionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
=======
    ModalComponent,
    ModalAccesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [
    provideAnimations(),
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
>>>>>>> page-example
})
export class AppModule { }
