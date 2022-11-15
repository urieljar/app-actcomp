import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'alumno',
    component: AlumnoComponent,
  },
  {
    path: 'jefedepa',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule)
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
