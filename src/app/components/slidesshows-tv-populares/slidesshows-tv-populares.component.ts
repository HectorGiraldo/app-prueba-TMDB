import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleTvComponent } from '../detalle-tv/detalle-tv.component';

@Component({
  selector: 'app-slidesshows-tv-populares',
  templateUrl: './slidesshows-tv-populares.component.html',
  styleUrls: ['./slidesshows-tv-populares.component.scss'],
})
export class SlidesshowsTvPopularesComponent implements OnInit {

  @Input() peliculas: Pelicula [] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.2,
    freeMode: true
  };

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  reachedEnd() {
    this.cargarMas.emit();
  }

  async verDetalle( id: string ) {
    const modal = await this.modalCtrl.create({
      component: DetalleTvComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
