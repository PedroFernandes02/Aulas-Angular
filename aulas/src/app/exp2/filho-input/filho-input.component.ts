import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho-input',
  templateUrl: './filho-input.component.html',
  styleUrls: ['./filho-input.component.css']
})
export class FilhoInputComponent implements OnInit {

  @Input() varQueRecebo;

  constructor() { }

  ngOnInit(): void {
  }

}
