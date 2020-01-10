import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle,  Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;

  detalle: PeliculaDetalle = {};
  oculto = 150;
  actores: Cast[] = [];
  estrella = 'star_outline';

  slideOpts = {
    slidesPerView: 3.2,
    freeMode: true
  };

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.getPeliculaDetalle(this.id);
    this.getPeliculaActores(this.id);
    this.existeFavorito();

  }

   existeFavorito() {
    this.dataService.existePelicula(this.id)
    .then( existe => this.estrella = ( existe ) ? 'star' : 'star-outline' );
  }

  getPeliculaDetalle( id: string ) {
    this.moviesService.getDetallePelicula(id)
    .subscribe( resp => {
      this.detalle = resp;
    });
  }

  getPeliculaActores( id: string ) {
    this.moviesService.getActoresPelicula(id)
    .subscribe( resp => {
      this.actores = resp.cast;
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito() {
    const existe = this.dataService.guardarPelicula( this.detalle );
    this.estrella = ( existe ) ? 'star' : 'star-outline';
  }

}
