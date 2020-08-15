import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemCounter: number;
  projectText = 'angular project';
  projects  = [];
  constructor() { }

  ngOnInit(): void {
    this.itemCounter = this.projects.length;
  }

  // tslint:disable-next-line:typedef
  addItem(){
    this.projects.push(this.projectText);
    this.projectText = ' ';
    this.itemCounter = this.projects.length;
  }

  // tslint:disable-next-line:typedef
  removeItem(i){
    this.projects.splice(i, 1);
    this.itemCounter = this.projects.length;
  }


}
