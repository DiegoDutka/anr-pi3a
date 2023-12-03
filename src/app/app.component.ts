import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  parcelType = [
    "vendida","reservada","libre", "comunitaria"
  ];
    constructor() { }

}
