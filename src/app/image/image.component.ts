import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { formatDate } from '@angular/common';
import { format } from 'util';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})

export class ImageComponent implements OnInit {

  imgno = this.setImgno();

  constructor() { }

  ngOnInit() {}

  setImgno() {
    let time = Date.now();
    time = time % 4;
    return time.toString();
  }
}
