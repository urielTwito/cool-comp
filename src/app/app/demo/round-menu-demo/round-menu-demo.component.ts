import { Component, OnInit } from '@angular/core';
import {ApplicationAction} from "../../../../components/round-menu/round-menu.component";

@Component({
  selector: 'app-round-menu-demo',
  templateUrl: 'round-menu-demo.component.html',
  styleUrls: ['round-menu-demo.component.css']
})
export class RoundMenuDemoComponent implements OnInit {

  constructor() { }

  actions: ApplicationAction<any>[] = [
    new ApplicationAction<any>("aa", "aa", "aa", this.action.bind(this), "icon-home"),
    new ApplicationAction<any>("bb", "bb", "bb", this.action.bind(this), "icon-headphones"),
    new ApplicationAction<any>("cc", "cc", "cc", this.action.bind(this), "icon-star"),
    new ApplicationAction<any>("dd", "dd", "dd", this.action.bind(this), "icon-envelope-alt"),
    new ApplicationAction<any>("ee", "ee", "ee", this.action.bind(this), "icon-cloud"),
    new ApplicationAction<any>("ff", "ff", "ff", this.action.bind(this), "icon-heart"),
    new ApplicationAction<any>("gg", "gg", "gg", this.action.bind(this), "icon-user"),
    new ApplicationAction<any>("hh", "hh", "hh", this.action.bind(this), "icon-trash"),
    new ApplicationAction<any>("ii", "ii", "ii", this.action.bind(this), "icon-pencil"),

  ];

  action(name: string) {
    console.log("execute", name);
    if(name=="aa"){
      alert(name);
    }
  }

  ngOnInit() {
  }

}
