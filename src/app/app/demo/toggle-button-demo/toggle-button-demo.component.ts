import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-toggle-button-demo',
  templateUrl: 'toggle-button-demo.component.html',
  styleUrls: ['toggle-button-demo.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ToggleButtonDemoComponent implements OnInit {

  secondIsCheck=true;
  firstIsCheck=false;
  untouchedCheck=true;
  constructor() { }

  ngOnInit() {
  }

}
