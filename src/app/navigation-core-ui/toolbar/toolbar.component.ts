import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  sidenavStatus: boolean
  constructor() {
      this.sidenavStatus = true;
   }

  ngOnInit() {
  }

}
