import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, TvDetalle } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  peliculasFavoritas: PeliculaDetalle[] = [];
  seriesFavoritas: TvDetalle[] = [];

  constructor (
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.cargarPeliculas();
  }

  ionViewWillEnter() {
    this.cargarPeliculas();
  }

  cargarMas() {
    this.cargarPeliculas();
  }

  async cargarPeliculas() {
    this.peliculasFavoritas = await this.dataService.cargarFavoritos();
    this.seriesFavoritas = await this.dataService.cargarFavoritosTv();
    console.log('cargarPeliculas',this.seriesFavoritas);
    

  }


}
