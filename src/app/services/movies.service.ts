import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespuestaMDB, PeliculaDetalle, RespuestaCredits, RespuestaTrend, RespuestaBusqueda, TvDetalle } from '../interfaces/interfaces';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularesPage = 0;
  private carteleraPage = 0;
  private movieNowPage = 0;
  private tvShowPage = 0;
  private tvShowPopularPage = 0;

  constructor(
    private http: HttpClient
  ) { }

  private ejecutarQuery<T>(query: string) {
    query = apiUrl + query;
    query += `&api_key=${ apiKey }&language=es&include_image_language=es`;
    console.log(query);
    return this.http.get<T>(query);
  }

  getPopulares() {
    this.popularesPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  getCartelera() {
    this.carteleraPage++;
    const hoy = new Date();
    const ultimoDia = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0 ).getDate();
    const mes = hoy.getMonth() + 1;

    let mesString;

    if ( mes < 10) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }

    const inicio = `${ hoy.getFullYear()}-${ mesString }-01`;
    const fin = `${ hoy.getFullYear()}-${ mesString }-${ ultimoDia }`;


    // tslint:disable-next-line: max-line-length
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${ inicio }&primary_release_date.lte=${ fin }&page=${this.carteleraPage}`);

  }

  getDetallePelicula( id: string ) {
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${ id }?a=1`);
  }

  getActoresPelicula( id: string ) {
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${ id }/credits?a=1`);
  }

  getSugerencias() {
    const type = 'movie';
    const time = 'day';
    return this.ejecutarQuery<RespuestaTrend>(`/trending/${type}/${time}?a=1`);
  }

  buscarPeliculas(texto: string) {

    return this.ejecutarQuery<RespuestaBusqueda>(`/search/movie?query=${texto}`);

  }

  getMovieNowPlaying() {
    this.movieNowPage++;
    return this.ejecutarQuery<RespuestaMDB>(`/movie/now_playing?a=1&page=${this.movieNowPage}`);
  }

  getTvShowsAir() {
    this.tvShowPage++;
    return this.ejecutarQuery<RespuestaMDB>(`/tv/on_the_air?a=1&page=${this.tvShowPage}`);
  }

  getDetalleTv( id: string ) {
    return this.ejecutarQuery<TvDetalle>(`/tv/${ id }?a=1`);
  }

  getTvPopular() {
    this.tvShowPopularPage++;
    return this.ejecutarQuery<RespuestaMDB>(`/tv/popular?a=1&page=${this.tvShowPopularPage}`);
  }

  getActoresTv( id: string ) {
    return this.ejecutarQuery<RespuestaCredits>(`/tv/${ id }/credits?a=1`);
  }

}
