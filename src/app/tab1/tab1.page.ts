import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula, PeliculaDetalle } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  PeliculasPopulares: Pelicula[] = [];
  movieNowPlaying: Pelicula[] = [];
  tvShowsAir: Pelicula[] = [];
  tvShowsPopular: Pelicula[] = [];



  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.getCartelera();
    this.getPopulares();
    this.getMovieNowPlaying();
    this.getTvShowsAir();
    this.getTvShowsPopular();
  }

  cargarMas() {
    this.getPopulares();
    this.getCartelera();
    this.getMovieNowPlaying();
    this.getTvShowsAir();
    this.getTvShowsPopular();
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

  getMovieNowPlaying() {
    this.moviesService.getMovieNowPlaying()
    .subscribe( resp => {
      const arrTemp = [ ...this.movieNowPlaying, ...resp.results];
      this.movieNowPlaying = arrTemp;
    });
  }

  getTvShowsAir() {
    this.moviesService.getTvShowsAir()
    .subscribe( resp => {
      const arrTemp = [ ...this.tvShowsAir, ...resp.results];
      this.tvShowsAir = arrTemp;
    });
  }

  getTvShowsPopular() {
    this.moviesService.getTvPopular()
    .subscribe( resp => {
      const arrTemp = [ ...this.tvShowsPopular, ...resp.results];
      this.tvShowsPopular = arrTemp;
    });
  }


}
