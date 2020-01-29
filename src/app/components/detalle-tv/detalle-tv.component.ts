import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Cast, TvDetalle } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detalle-tv',
  templateUrl: './detalle-tv.component.html',
  styleUrls: ['./detalle-tv.component.scss'],
})
export class DetalleTvComponent implements OnInit {

  @Input() id;

  detalle: TvDetalle = {};
  oculto = 150;
  actores: Cast[] = [];
  estrella = 'star-outline';

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

    this.getTvDetalle(this.id);
    this.gettvActores(this.id);
    this.existeFavorito();

  }

   existeFavorito() {
    this.dataService.existeTv(this.id)
    .then( existe => this.estrella = ( existe ) ? 'star' : 'star-outline' );
  }

  getTvDetalle( id: string ) {
    this.moviesService.getDetalleTv(id)
    .subscribe( resp => {
      this.detalle = resp;
      console.log(this.detalle);
    });
  }

  gettvActores( id: string ) {
    this.moviesService.getActoresTv(id)
    .subscribe( resp => {
      this.actores = resp.cast;
    });
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito() {
    const existe = this.dataService.guardarTv( this.detalle );
    this.estrella = ( existe ) ? 'star' : 'star-outline';
  }


}
