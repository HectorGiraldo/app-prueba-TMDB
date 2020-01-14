import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-slidesshows-populares',
  templateUrl: './slidesshows-populares.component.html',
  styleUrls: ['./slidesshows-populares.component.scss'],
})
export class SlidesshowsPopularesComponent implements OnInit {

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
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();
  }

}
