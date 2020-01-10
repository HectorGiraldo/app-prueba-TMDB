import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshows-backdrop',
  templateUrl: './slideshows-backdrop.component.html',
  styleUrls: ['./slideshows-backdrop.component.scss'],
})
export class SlideshowsBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula [] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 1.2,
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
