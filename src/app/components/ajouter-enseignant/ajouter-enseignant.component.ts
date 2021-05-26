import { Component, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/models/Enseignant';
@Component({
  selector: 'app-ajouter-enseignant',
  templateUrl: './ajouter-enseignant.component.html',
  styleUrls: ['./ajouter-enseignant.component.css']
})
export class AjouterEnseignantComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

  }
  Ajouter()
  {
    let info= document.querySelectorAll('.form-control');
    //validation 
    //img src
    //send to db
    let enseignant:Enseignant=new Enseignant(info[0].innerHTML,info[1].innerHTML,info[2].innerHTML,info[3].innerHTML,
      parseFloat( info[4].innerHTML),info[5].innerHTML);
  
   

  }

}
