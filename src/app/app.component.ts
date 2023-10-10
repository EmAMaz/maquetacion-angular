import { Component } from '@angular/core';
import { ICarrouselItem } from './Icarrousel-item';
import { CAROUSEL_DATA_ITEMS } from './constants/carousel.const';
import { CAROUSEL_DATA_ITEMS_OP } from './constants/carousel-opinion.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  public carrouselData: ICarrouselItem[] = CAROUSEL_DATA_ITEMS;
  public carrouselDataOpinion: ICarrouselItem[] = CAROUSEL_DATA_ITEMS_OP;
}
