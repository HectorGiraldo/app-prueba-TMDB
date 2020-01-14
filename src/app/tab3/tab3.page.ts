import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  peliculasFavoritas: PeliculaDetalle[] = [];

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

  }


}
