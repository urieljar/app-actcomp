import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';

import { AppModule } from '../app.module';
import { JefeDepartamentoComponent } from './jefe-departamento/jefe-departamento.component';
import { ComponentsModule } from '../components/components.module';
import { AcreditacionComponent } from './acreditacion/acreditacion.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { ExtraescolaresComponent } from './extraescolares/extraescolares.component';
import { AcademicasComponent } from './academicas/academicas.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { RegistrarAlumnoComponent } from './registrar-alumno/registrar-alumno.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    InicioComponent,
    AlumnoComponent,
    JefeDepartamentoComponent,
    AcademicasComponent,
    ExtraescolaresComponent,
    RegistrarAlumnoComponent,
    EvaluacionComponent,
    AcreditacionComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
