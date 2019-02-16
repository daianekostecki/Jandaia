import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadernoHomeComponent } from './caderno-home/caderno-home.component';
import { CapaComponent } from './capa/capa.component';
import { AppComponent } from './app.component';
import { MateriaComponent } from './materia/materia.component';

const routes: Routes = [
  { path: 'capa', component: CapaComponent },
  { path: 'home', component: CadernoHomeComponent },
  { path: 'materia/:descMateria', component: MateriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
