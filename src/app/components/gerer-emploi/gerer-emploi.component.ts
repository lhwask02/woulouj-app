import { Component ,OnInit } from '@angular/core';
import { Seance } from 'src/app/models/Seance';

@Component({
 selector: 'app-gerer-emploi',
 templateUrl: './gerer-emploi.component.html',
 styleUrls: ['./gerer-emploi.component.css']
})
export class GererEmploiComponent implements OnInit {

 constructor() { }

 idSeanceOnhover:number=0;
 empl: string[] = [];
 days: string[] = [];
 seance:Seance[]=[];
 time:number[]=[];
 fusion:boolean=false;
 firstClick:boolean=false;
 idfirstClick:string="";
 secondClick:boolean=false;
 idsecondClick:string="";
tbody:any; tr:any; td:any;
 ngOnInit(): void {
 this.days=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi", "Dimanche",
 ];
 this.empl=["","","","",    "","","",""     ,"","","","",  "","","","",    "","","",""     ,"","","",""
  ];
  this.time=[8,9,10,11,12,13,14,15,16,17,18,19];
  this.seance=[ 
   
   {
    id:"1",
    Date:new Date('22-05-2021'),
    HeurDebut:"8",
    Duree:0,
    Matier:"Math",
    Enseignant:"Enseignant_Math",
    Salle:"Salle_Math",
    Group: {
        Id:0,
        Libelle:"A",
        Programme: {
            Intitule:"CE",
            Tarif:0,
            Contenu:[{
                Matier:"M",
                Enseignant:"E"
            }]
        },
        NumberEleve:0
    }
   },
   {
    id:"1",
    Date:new Date('22-05-2021'),
    HeurDebut:"8",
    Duree:0,
    Matier:"Math",
    Enseignant:"Enseignant_Math",
    Salle:"Salle_Math",
    Group: {
        Id:0,
        Libelle:"A",
        Programme: {
            Intitule:"CE",
            Tarif:0,
            Contenu:[{
                Matier:"M",
                Enseignant:"E"
            }]
        },
        NumberEleve:0
    }
   },
   {
    id:"1",
    Date:new Date('22-05-2021'),
    HeurDebut:"8",
    Duree:0,
    Matier:"Math",
    Enseignant:"Enseignant_Math",
    Salle:"Salle_Math",
    Group: {
        Id:0,
        Libelle:"A",
        Programme: {
            Intitule:"CE",
            Tarif:0,
            Contenu:[{
                Matier:"M",
                Enseignant:"E"
            }]
        },
        NumberEleve:0
    }
   }

 ];
 console.log( document.querySelector("#tbdy"));
setTimeout(()=>this.rowFusion(),10);

}
Enregistrer()
{
    document.getElementById( "edit")!.style.display = 'none' ; 
    document.getElementById( "InfoSeance")!.style.display = 'block' ;
    document.getElementById( "InfoSeance")!.style.display = 'visible' ; 
}
EditSeance()
{
    document.getElementById( "InfoSeance")!.style.display = 'none' ; 
    document.getElementById( "edit")!.style.display = 'block' ;
    document.getElementById( "edit")!.style.display = 'visible' ; 
    
}
Supprimer()
{}
onmouseout(id:number)
{
    //document.getElementById( "InfoSeance")!.style.visibility = 'hidden' ; 
   // document.getElementById( "InfoSeance")!.style.display = 'none' ; 
}
onmouseover(id:number)
{
    document.getElementById( "InfoSeance")!.style.display = 'block' ;
    document.getElementById( "InfoSeance")!.style.display = 'visible' ;
    this.idSeanceOnhover=id; 
    document.getElementById( "edit")!.style.display = 'none' ; 
    document.getElementById( "InfoSeance")!.style.display = 'block' ;
    document.getElementById( "InfoSeance")!.style.display = 'visible' ; 
}
 rowFusion()
 {
     if(!this.fusion)
     {
        for(let i=0;i<12;i++)
        { 
            this.tr=document.createElement("tr");
            this.td=document.createElement("td");
        
            for(let i=0;i<7;i++)
            {
                this.td=document.createElement("td");
                this.td.appendChild( document.createTextNode(""));
                this.tr.appendChild(this.td);
            }
            document.querySelector("#tbdy")!.insertBefore(this.tr,document.querySelector("#tbdy")!.childNodes[2*i+1]);}
        this.fusion=true;
     }
   
    }
 
 divclicked(id:any)
 {
 
    if( !this.firstClick && !this.secondClick)
        { 
            this. idfirstClick=id;
            this.firstClick=true;
        	document.getElementById( this. idfirstClick)!.style.backgroundColor = 'green' ; 
        }
   else if( (this.firstClick && !this.secondClick)) 
            {
                this. idsecondClick=id;
               if(this.idfirstClick !=this.idsecondClick)
               {
                if(parseInt(this.idfirstClick) % 10 == parseInt(this.idsecondClick) % 10)
                {
                    if(this.idfirstClick>this.idsecondClick)
                    {
                        this.idfirstClick=(parseInt(this.idsecondClick)+parseInt(this.idfirstClick)).toString();
                        this.idsecondClick= (parseInt(this.idfirstClick)-parseInt(this.idsecondClick)).toString();
                        this.idfirstClick=(parseInt(this.idfirstClick)-parseInt(this.idsecondClick)).toString();
                    }
                    let x= ((parseInt(this.idsecondClick)-parseInt( this.idfirstClick) )/10 )+1;
                    let col1=( document.getElementById(this.idfirstClick)!.getAttribute("colspan"))?.toString()!;
                    let col2=( document.getElementById(this.idsecondClick)!.getAttribute("colspan"))?.toString()!;
                if (!(col2 != undefined ))
                {
                    if(!(col1 != undefined ))
                 {   document.getElementById(this.idfirstClick)?.setAttribute("colspan",x.toString());
                 for (let index = parseInt(this.idfirstClick)+10; index <= parseInt(this.idsecondClick); index=index+10) {
                    document.getElementById( index.toString())!.style.display = 'none' ; 
                    
                }
                }
                    else
                    document.getElementById(this.idfirstClick)?.setAttribute("colspan",(parseInt(col1)+ x).toString());
                }
               
                }
               }
                this. idfirstClick="";
                this. idsecondClick="";
                this.firstClick=false;
            }



 }
 onclick()
 {
alert(0);
 }

}
