import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  
  @Input('imageno') imgno;
  
  @Output() public imageEmitter: EventEmitter<string>=new EventEmitter();

  constructor() { }
  
  ngOnInit() {}
    fireEmitter(){
      this.imageEmitter.emit("Do you also need help like this girl; here you are.  Photo By: Erick Chingalo");
    }
}