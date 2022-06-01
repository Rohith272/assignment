import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildComponent) viewdata !:ChildComponent;
  title = 'sub';
  inputobj={"name":"","clas":"","phone":""}
  TransferData(name:any,clas:any,phone:any){
    this.inputobj={"name":name,"clas":clas,"phone":phone};
    this.viewdata.updatelist(this.inputobj);
  }
}
