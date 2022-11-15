import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraescolaresComponent } from './extraescolares/extraescolares.component';
import { AcademicasComponent } from './academicas/academicas.component';
import { RegistrarAlumnoComponent } from './registrar-alumno/registrar-alumno.component';
import { RouterModule, Routes } from '@angular/router';
import { JefeDepartamentoComponent } from './jefe-departamento/jefe-departamento.component';
import { AcreditacionComponent } from './acreditacion/acreditacion.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';

const rutas: Routes =[
  {
    path: '',
    component: JefeDepartamentoComponent,
    children: [
      { path: 'academicas', component: AcademicasComponent },
      { path: 'registrar', component: RegistrarAlumnoComponent },
      { path: 'evaluacion', component: EvaluacionComponent },
      { path: 'acreditacion', component: AcreditacionComponent },
      { path: '**', redirectTo: 'academicas'}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( rutas)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
