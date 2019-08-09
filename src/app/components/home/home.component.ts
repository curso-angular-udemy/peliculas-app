import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any;
  infantiles: any;
  constructor(private _ps: PeliculasService) {
    this._ps.getCartelera().subscribe(data => this.cartelera = data);
    this._ps.getInfantiles().subscribe(data => this.infantiles = data);

  }

  ngOnInit() {
  }

}
