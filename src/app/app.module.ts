import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProgrammeComponent } from './components/list-programme/list-programme.component';
import { GererProgrammesComponent } from './components/gerer-programmes/gerer-programmes.component';
import { GererEmploiComponent } from './components/gerer-emploi/gerer-emploi.component';
import { AjouterGroupeComponent } from './components/ajouter-groupe/ajouter-groupe.component';
import { ListEnseignantComponent } from './components/list-enseignant/list-enseignant.component';
import { ListGroupeComponent } from './components/list-groupe/list-groupe.component';
import { SchoolInfoComponent } from './components/school-info/school-info.component';
import { AjouterEnseignantComponent } from './components/ajouter-enseignant/ajouter-enseignant.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProgrammeComponent,
    GererProgrammesComponent,
    GererEmploiComponent,
    AjouterGroupeComponent,
    ListEnseignantComponent,
    ListGroupeComponent,
    SchoolInfoComponent,
    AjouterEnseignantComponent,
    RightMenuComponent,
    LeftMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
