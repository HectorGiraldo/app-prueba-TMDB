import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleTvComponent } from '../detalle-tv/detalle-tv.component';

@Component({
  selector: 'app-slidesshows-tv-aire',
  templateUrl: './slidesshows-tv-aire.component.html',
  styleUrls: ['./slidesshows-tv-aire.component.scss'],
})
export class SlidesshowsTvAireComponent implements OnInit {

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
