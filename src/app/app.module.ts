import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { PipeMayusculaPipe } from './pipes/pipe-mayuscula.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListAlumnosComponent,
    PipeMayusculaPipe,

  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
