import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowsParesComponent } from './slideshows-pares/slideshows-pares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DetalleTvComponent } from './detalle-tv/detalle-tv.component';
import { SlidesshowsPopularesComponent } from './slidesshows-populares/slidesshows-populares.component';
import { SlidesshowsTvPopularesComponent } from './slidesshows-tv-populares/slidesshows-tv-populares.component';
import { SlidesshowsTvAireComponent } from './slidesshows-tv-aire/slidesshows-tv-aire.component';
import { SlidesshowsCarteleraComponent } from './slidesshows-cartelera/slidesshows-cartelera.component';

@NgModule({
  entryComponents: [
    DetalleComponent,
    DetalleTvComponent
  ],
  declarations: [
    SlideshowsParesComponent,
    DetalleComponent,
    DetalleTvComponent,
    SlidesshowsPopularesComponent,
    SlidesshowsTvPopularesComponent,
    SlidesshowsTvAireComponent,
    SlidesshowsCarteleraComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlideshowsParesComponent,
    DetalleComponent,
    DetalleTvComponent,
    SlidesshowsPopularesComponent,
    SlidesshowsTvPopularesComponent,
    SlidesshowsTvAireComponent,
    SlidesshowsCarteleraComponent
  ]
})
export class ComponentsModule { }
