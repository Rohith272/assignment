import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() objdata:any;
  listarray=[{"name":"","clas":"","phone":""}]
  constructor() { }

  updatelist(obj:any){
    this.listarray.push(obj);
  }

  ngOnInit(): void {
  }

}
