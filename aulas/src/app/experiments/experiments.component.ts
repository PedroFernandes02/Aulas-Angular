import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name : string ="Pedro";

  changeName(event){
    this.name = event.target.value;
  }

  arrayAnimais: Array<string> = ["cao", "gato", "galinha", "coelho"];

  analisarReferencia(referencia){
    console.log(referencia.value)
  }

  avaliaNome(){
    return this.name == 'Miguel' ? true : false;
  }

}
