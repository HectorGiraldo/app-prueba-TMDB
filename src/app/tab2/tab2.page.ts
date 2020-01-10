import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula, ResultBusqueda } from '../interfaces/interfaces';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  textoBuscar = '';
  populares: Pelicula[] = [];
  peliculas: ResultBusqueda[] = [];
  buscando = false;

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.getPopulares();
  }

  buscar( event ) {
    const valor: string = event.detail.value;
    if ( valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }
      this.buscando = true;
      this.moviesService.buscarPeliculas(valor)
      .subscribe( resp => {
      this.peliculas = resp.results;
      console.log(resp.results);
      this.buscando = false;
    });

  }

  getPopulares () {
    this.moviesService.getSugerencias()
    .subscribe( resp => {
      this.populares = resp.results;
    });
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
