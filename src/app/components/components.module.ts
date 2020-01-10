import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowsBackdropComponent } from './slideshows-backdrop/slideshows-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { PosterPathComponent } from './poster-path/poster-path.component';
import { SlideshowsParesComponent } from './slideshows-pares/slideshows-pares.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  entryComponents: [
    DetalleComponent
  ],
  declarations: [
    SlideshowsBackdropComponent,
    PosterPathComponent,
    SlideshowsParesComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlideshowsBackdropComponent,
    PosterPathComponent,
    SlideshowsParesComponent,
    DetalleComponent
  ]
})
export class ComponentsModule { }
