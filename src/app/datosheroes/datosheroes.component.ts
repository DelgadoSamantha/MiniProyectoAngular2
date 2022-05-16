import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';
@Component({
  selector: 'app-datosheroes',
  templateUrl: './datosheroes.component.html',
  styleUrls: ['./datosheroes.component.css']
})
export class DatosheroesComponent implements OnInit {

  datosHeroes: Heroe[]=[];

  constructor(public miservicio:HeroeService) { 
    console.log("Constructor de Daros Heroes");
  }

  ngOnInit(): void {
    console.log("ngOnInit de Heroes");
    this.datosHeroes= this.miservicio.getHeroes();
    console.log(this.datosHeroes);
  }

}
