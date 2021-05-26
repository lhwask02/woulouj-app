import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterEnseignantComponent } from './components/ajouter-enseignant/ajouter-enseignant.component';
import { AjouterGroupeComponent } from './components/ajouter-groupe/ajouter-groupe.component';
import { GererEmploiComponent } from './components/gerer-emploi/gerer-emploi.component';
import { GererProgrammesComponent } from './components/gerer-programmes/gerer-programmes.component';
import { ListEnseignantComponent } from './components/list-enseignant/list-enseignant.component';
import { ListGroupeComponent } from './components/list-groupe/list-groupe.component';
import { ListProgrammeComponent } from './components/list-programme/list-programme.component';
import { SchoolInfoComponent } from './components/school-info/school-info.component';

const routes: Routes = [
  {path:"",component:SchoolInfoComponent},
  {path:"SchoolInfoComponent",component:SchoolInfoComponent},
  {path:"AjouterEnseignantComponent",component:AjouterEnseignantComponent},
  {path:"AjouterGroupeComponent",component:AjouterGroupeComponent},
  {path:"GererEmploiComponent",component:GererEmploiComponent},
  {path:"GererProgrammesComponent",component:GererProgrammesComponent},
  {path:"ListEnseignantComponent",component:ListEnseignantComponent},
  {path:"ListProgrammeComponent",component:ListProgrammeComponent},
  {path:"ListGroupeComponent",component:ListGroupeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
