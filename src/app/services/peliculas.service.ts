import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = environment.apiKey;
  urlMovieDb = 'https://api.themoviedb.org/3';
  peliculas: any[];

  constructor(private jsonp: Jsonp) { }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDay()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDay()}`;

    const url = `${this.urlMovieDb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(
      map( res => res.json().results)
    );
  }

  getPopulares() {
    const url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(
      map( res => res.json().results)
    );
  }

  getInfantiles() {
    const url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(
      map( res => res.json().results)
    );
  }

  buscarPelicula(texto: string) {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMovieDb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(
      map( res => {
        this.peliculas = res.json().results
        return res.json().results;
      })
    );
  }

  getPelicula( id: string) {
    const url = `${this.urlMovieDb}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    
    return this.jsonp.get(url).pipe(
      map( res => res.json())
    );
  }
}
