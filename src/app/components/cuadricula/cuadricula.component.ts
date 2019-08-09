import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cuadricula',
  templateUrl: './cuadricula.component.html',
  styleUrls: ['./cuadricula.component.css']
})
export class CuadriculaComponent implements OnInit {

  constructor() { }

  @Input() titulo: string;
  @Input() peliculas: Array<string>

  ngOnInit() {
  }

}
