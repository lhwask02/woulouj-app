import { Component, OnInit } from '@angular/core';
import { Groupe } from 'src/app/models/Groupe';
import { Programme } from 'src/app/models/Programme';

@Component({
  selector: 'app-list-programme',
  templateUrl: './list-programme.component.html',
  styleUrls: ['./list-programme.component.css']
})
export class ListProgrammeComponent implements OnInit {

  listProgrammeapi:Programme[]=[];
  listProgramme:Programme[]=[];
  lst:Groupe[]=[];
  constructor() { }

  // {Id :1, Libelle :"A", Programme:  {
  //   Intitule:"CE4",Tarif:1700,Contenu:[
  //     {Matier:"Math",Enseignant:"Enseignant0"},
  //     {Matier:"SVT",Enseignant:"Enseignant2"},
  //     {Matier:"Physique",Enseignant:"Enseignant0"},
  //     {Matier:"Informatique",Enseignant:"Enseignant3"},
  //     {Matier:"Scienses de la vie et terre",Enseignant:"Enseignant4"}
  //                                 ]
  // },NumberEleve:10},
  // {Id :2, Libelle :"C", Programme:  {
  //   Intitule:"CE5",Tarif:1500,Contenu:[
  //     {Matier:"Math",Enseignant:"Enseignant0"},
  //     {Matier:"SVT",Enseignant:"Enseignant2"},
  //     {Matier:"Physique",Enseignant:"Enseignant0"},
  //                                 ]
  // },NumberEleve:20},
  // {Id :3, Libelle :"B", Programme:  {
  //   Intitule:"CE3",Tarif:800,Contenu:[
  //     {Matier:"Math",Enseignant:"Enseignant0"},
  //     {Matier:"SVT",Enseignant:"Enseignant2"},
  //                                 ]
  // },NumberEleve:30}
  ngOnInit(): void {
    this.listProgrammeapi=[
      {
        Intitule:"CE7",
        Tarif:2000,
        Contenu:[
                  {
                    Matier:"Math",
                    Enseignant:"Enseignant0"
                  },
                  {
                    Matier:"Physique",
                    Enseignant:"Enseignant1"
                  }
        ]
      }
,
{
  Intitule:"CE4",
  Tarif:1200,
  Contenu:[
            {
              Matier:"Math",
              Enseignant:"Enseignant0"
            }
  ]
}, {
  Intitule:"CE5",
  Tarif:1300,
  Contenu:[
            {
              Matier:"Informatique",
              Enseignant:"Enseignant3"
            }
  ]
}
    ];
    this.listProgrammeapi.forEach((Pro)=>{
        this.listProgramme.push(Pro);
    });
  }
  Show(id:any)
  {
    let str="";
    this.listProgrammeapi.forEach((pro)=>{
      if(pro.Intitule.toLowerCase()==id.toLowerCase())
      {
         str ="Intitule : "+pro.Intitule + "\nTarif : "+pro.Tarif;
         for (let index = 0; index < pro.Contenu.length; index++)
          {
            str =str+"\nEnseignant : "+ pro.Contenu[index].Enseignant+"\nMatier : "+ pro.Contenu[index].Matier;
          }
      }
    });
    alert(str);
  }
  Supprimer(id:any)
  {
  this.listProgramme = this.listProgramme.filter((pro)=>pro.Intitule.toLowerCase() != id.toLowerCase());
  }
}
