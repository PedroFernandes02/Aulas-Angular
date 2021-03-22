import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cor: string = "white";

  changecolor(corR: string){
    this.cor = corR;
  }

  fade(colore){
    colore.style.opacity = '0.5';
  }

  tam: number = 8;
 
  size(refeInput:HTMLElement){
    refeInput.style.height = this.tam +"px";
    this.tam *= 2;
  }


}
