import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayCalculator = false;
  displayButton = true;
  message: string;
  tabs=["Open Scientific Calculator", "Help Others", "Post Question", "Profile"];
  title="My HomeWorker";

  img="1";

  changeImg(){
    var img=parseInt(this.img);
    if (img>=4){
      img=0;
    }
    img++;
    this.img=img.toString();
  }
  onMessage(e){
    this.message = e;
  }
}
