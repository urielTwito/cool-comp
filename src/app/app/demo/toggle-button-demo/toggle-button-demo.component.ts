import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-button-demo',
  templateUrl: 'toggle-button-demo.component.html',
  styleUrls: ['toggle-button-demo.component.css']
})
export class ToggleButtonDemoComponent implements OnInit {

  secondIsCheck=true;
  firstIsCheck=false;
  constructor() { }

  ngOnInit() {
  }

}
