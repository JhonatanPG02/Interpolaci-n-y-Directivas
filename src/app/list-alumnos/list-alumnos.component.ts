import { Component, OnInit } from '@angular/core';
import {Alumno} from '../models/alumnos.model'

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {

  public alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Juan',
      apellidos: 'Robles García',
      nota: 14,
      aprobado: true,
    },
    {
      id: 2,
      nombre: 'Susana',
      apellidos: 'Montero Torres',
      nota: 15,
      aprobado: true,
    },
    {
      id: 3,
      nombre: 'Pedro',
      apellidos: 'Alvarez Mendez',
      nota: 9,
      aprobado: false,
    },
    {
      id: 4,
      nombre: 'Luis',
      apellidos: 'Cabrera Portilla',
      nota: 16,
      aprobado: true,
    },
    {
      id: 5,
      nombre: 'Rosa',
      apellidos: 'Rufino Martell',
      nota: 8,
      aprobado: false,
    },
    {
      id: 6,
      nombre: 'Carla',
      apellidos: 'Ramirez Galloyo',
      nota: 16,
      aprobado: true,
    },
    {
      id: 7,
      nombre: 'Enrique',
      apellidos: 'Mejía Gstelú',
      nota: 11,
      aprobado: true,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
