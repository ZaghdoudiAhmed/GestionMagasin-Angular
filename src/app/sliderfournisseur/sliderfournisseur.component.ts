import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { ListfournisseurComponent } from '../listfournisseur/listfournisseur.component';
import { Fournisseur } from '../models/Fournisseur';
import { FournisseurService } from '../services/fournisseur.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-sliderfournisseur',
  templateUrl: './sliderfournisseur.component.html',
  styleUrls: ['./sliderfournisseur.component.css']
})
export class SliderfournisseurComponent implements OnInit {





  data = [
    { img: "../../assets/fournisseur.jpg", title: "Slide 1" },
    { img: "../../assets/f.png", title: "Slide 2" },
    { img: "../../assets/fournisseur.jpg", title: "Slide 3" }
  ];


  

  listFournisseur: Fournisseur[];


  constructor(private serviceFournisseur: FournisseurService,private http: HttpService) { }

  ngOnInit(): void {


    this.serviceFournisseur.getAllFournisseurs().subscribe(
      (data: Fournisseur[]) => {
         this.listFournisseur = data;
      })
      


      
     
      

      for (let index = 0; index < this.listFournisseur.length; index++) {

     // this.imgCollectione.image = ;
/*
      this.imgCollectione=this.imgCollectione {
    //  image +="ssss";

      
      
      }
    }*/
  }


}



/*imgCollection: Array<object> = [];
verifslider=-1;
showimages(images:any,i:any){
if(this.verifslider==i){

  for(let img of images){

    let obj = {'i':i,'image':img.url,'thumbImage':img.url,'alt':img.name,'title':img.name};
    this.imgCollection.splice(this.imgCollection.indexOf(obj),1);
  }
  this.verifslider=-1;
}

else{
  this.imgCollection=[];
  this.verifslider=i;
  console.log(images);
  for(let img of images){
    console.log(i.url);
    this.imgCollection.push({'i':i,'image':img.url,'thumbImage':img.url,'alt':img.name,'title':img.name});
  }
}


}*/




}




