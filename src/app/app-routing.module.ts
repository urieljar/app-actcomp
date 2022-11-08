import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { JefeDepartamentoComponent } from './pages/jefe-departamento/jefe-departamento.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'alumno',
    component: AlumnoComponent
  },
  {
    path: 'jefedepa',
    component: JefeDepartamentoComponent
  },
  {
    path: '**',
    redirectTo: '/inicio'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
