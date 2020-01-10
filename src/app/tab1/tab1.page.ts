import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  PeliculasPopulares: Pelicula[] = [];


  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.getCartelera();
    this.getPopulares();
  }

  cargarMas() {
    this.getPopulares();
    this.getCartelera();
  }


  getPopulares() {
    this.moviesService.getPopulares()
    .subscribe( resp => {
      const arrTemp = [ ...this.PeliculasPopulares, ...resp.results];
      this.PeliculasPopulares = arrTemp;
    });
  }

  getCartelera() {
    this.moviesService.getCartelera()
    .subscribe( resp => {
      const arrTemp = [ ...this.peliculasRecientes, ...resp.results];
      this.peliculasRecientes = arrTemp;
    });
  }


}
