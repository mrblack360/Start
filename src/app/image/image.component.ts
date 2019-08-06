import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imgno: number;

  constructor() { }

  ngOnInit() {}

  setImgno(){
    var time = Date();
    console.log(time)
  }
}
