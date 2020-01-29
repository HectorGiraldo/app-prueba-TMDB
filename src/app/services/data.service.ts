import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle, TvDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  peliculas: PeliculaDetalle[] = [];
  series: TvDetalle[] = [];


  constructor(
    private storage: Storage,
    private toastCtrl: ToastController
  ) {
    this.cargarFavoritos();
   }

  async presentToast( message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  guardarPelicula( pelicula: PeliculaDetalle) {

    let existe = false;
    let mensaje = '';

    for ( const peli of this.peliculas ) {
      if ( peli.id === pelicula.id ) {
        existe = true;
        break;
      }
    }

    if ( existe ) {
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );
      mensaje = 'Removido de Favoritos';
    } else {
      this.peliculas.push( pelicula );
      mensaje = 'Agregado a Favoritos';
    }

    this.presentToast( mensaje );
    this.storage.set('peliculas', this.peliculas);
    return !existe;
  }

  guardarTv( tv: TvDetalle) {

    let existe = false;
    let mensaje = '';

    for ( const peli of this.series ) {
      if ( peli.id === tv.id ) {
        existe = true;
        break;
      }
    }

    if ( existe ) {
      this.series = this.series.filter( peli => peli.id !== tv.id );
      mensaje = 'Removido de Favoritos';
    } else {
      this.series.push( tv );
      mensaje = 'Agregado a Favoritos';
    }

    this.presentToast( mensaje );
    this.storage.set('tv', this.series);
    console.log('guardarTv', this.series);
    
    return !existe;
  }

  async cargarFavoritos() {
    const peliculas = await this.storage.get( 'peliculas' );
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async cargarFavoritosTv() {
    const series = await this.storage.get( 'tv' );
    this.series = series || [];
    console.log('cargarFavoritosTv', this.series);
    return this.series;
  }

  async existePelicula( id ) {

    await this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id === id );

    return ( existe ) ? true : false;
  }

  async existeTv( id ) {

    await this.cargarFavoritosTv();
    const existe = this.series.find( peli => peli.id === id );

    return ( existe ) ? true : false;
  }


}
