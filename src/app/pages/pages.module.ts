import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { JefeDepartamentoComponent } from './jefe-departamento/jefe-departamento.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { AcademicasComponent } from './academicas/academicas.component';
import { ExtraescolaresComponent } from './extraescolares/extraescolares.component';
import { RegistrarAlumnoComponent } from './registrar-alumno/registrar-alumno.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { AcreditacionComponent } from './acreditacion/acreditacion.component';


@NgModule({
  declarations: [
    InicioComponent,
    AlumnoComponent,
    JefeDepartamentoComponent,
    AcademicasComponent,
    ExtraescolaresComponent,
    RegistrarAlumnoComponent,
    EvaluacionComponent,
    AcreditacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
