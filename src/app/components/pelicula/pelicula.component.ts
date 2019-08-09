import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  pagAnterior: string;
  busqueda: string;

  constructor(private peliculasService: PeliculasService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.peliculasService.getPelicula(params.id).subscribe( pelicula => {
        if (params.busqueda) {
          this.busqueda = params.busqueda;
        }
        this.pelicula = pelicula;
        this.pagAnterior = params.pag;
      })
    })
  }

}
