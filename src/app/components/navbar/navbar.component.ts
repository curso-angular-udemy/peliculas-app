import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  buscarPelicula(texto) {
    if (texto.length === 0) {
      return;
    }
    this.router.navigate(['buscar', texto])
    console.log(texto)
  }
}
