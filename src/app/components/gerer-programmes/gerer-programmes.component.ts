import { CdkDragDrop,moveItemInArray,transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Programme } from 'src/app/models/Programme';
import { Cour } from '../../models/Cour';
@Component({
  selector: 'app-gerer-programmes',
  templateUrl: './gerer-programmes.component.html',
  styleUrls: ['./gerer-programmes.component.css']
})
export class GererProgrammesComponent implements OnInit {

  listcoursapi: Cour[] = [];
  listcoursfilter: Cour[] = [];
  listcoursFinal: Cour[] = [];
  MatierRechrecher:string="";
  Prix:string="";
  CE:string="";
  constructor() { }
  Drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
  ngOnInit(): void {
    this.listcoursapi=[
      {Matier:"Math",Enseignant:"Enseignant0"},
      {Matier:"SVT",Enseignant:"Enseignant2"},
      {Matier:"Physique",Enseignant:"Enseignant1"},
      {Matier:"Informatique",Enseignant:"Enseignant3"},
      {Matier:"Scienses de la vie et terre",Enseignant:"Enseignant4"}
    ];
    this.listcoursapi.forEach((cour)=>{this.listcoursfilter.push(cour)});

  }
  Intitule(e:any)
  {
    this.CE=e.target.value;
  }
  Tarif(e:any)
  {
    this.Prix=e.target.value;
  }
  Filter(e :any) {
    this.listcoursfilter=this.listcoursapi;
    this.MatierRechrecher=e.target.value.toLowerCase().trim();
    console.log(this.MatierRechrecher);
    this.listcoursfilter=
     this.listcoursapi.filter((cour)=>
      cour.Matier.substring(0,this.MatierRechrecher.length).toLowerCase()== this.MatierRechrecher);
      //if(cour.Matier.toLowerCase().indexOf(filter.toLowerCase())>-1)
  }
  Ajouter()
  {
    this.listcoursapi.push({Matier:this.MatierRechrecher,Enseignant:""}) ;
    this.Filter("");
  }
  Exist(){
     this.listcoursfilter.map((cour)=>
    {
      if(!this.listcoursapi.includes(cour))
      this.listcoursapi.push(cour);
    }
    );
  }
  Enregistrer()
  {
    let progr:Programme={Intitule:this.CE,Tarif:parseFloat(this.Prix),Contenu:this.listcoursFinal};
  }
}
