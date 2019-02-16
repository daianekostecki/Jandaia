import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caderno-home',
  templateUrl: './caderno-home.component.html',
})
export class CadernoHomeComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  buscarMateria(materia) {
    console.log(materia);
    this.route.navigate(['materia', materia]);
  }

  voltar() {
    this.route.navigate(['capa']);
  }

}
