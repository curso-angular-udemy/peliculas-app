// Routes
import { APP_ROUTES } from './app.routing';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
// Services

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { JsonpModule } from '@angular/http';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { CuadriculaComponent } from './components/cuadricula/cuadricula.component';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    PeliculaImagenPipe,
    CuadriculaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
