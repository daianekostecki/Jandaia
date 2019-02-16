import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
})
export class CapaComponent implements OnInit {
  title = 'Data4Good';

  constructor(private route: Router) {

  }

  ngOnInit() {

  }

  navigateHome() {
    this.route.navigate(['home']);
  }


}
