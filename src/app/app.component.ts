import {Component} from '@angular/core';
import {ApplicationAction} from "./components/round-menu/round-menu.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  actions: ApplicationAction<any>[] = [
    new ApplicationAction<any>("aa", "aa", "aa", this.action.bind(this), "icon-home"),
    new ApplicationAction<any>("bb", "bb", "bb", this.action.bind(this), "icon-headphones"),
    new ApplicationAction<any>("cc", "cc", "cc", this.action.bind(this), "icon-star"),
    new ApplicationAction<any>("dd", "dd", "dd", this.action.bind(this), "icon-envelope-alt"),
    new ApplicationAction<any>("ee", "ee", "ee", this.action.bind(this), "icon-cloud"),
    new ApplicationAction<any>("ff", "ff", "ff", this.action.bind(this), "icon-heart"),
    new ApplicationAction<any>("gg", "gg", "gg", this.action.bind(this), "icon-user")

  ];

  action(name: string) {
    console.log("execute", name);
    if(name=="aa"){
      alert(name);
    }
  }

  click() {
    console.log("timeout");
    setTimeout(() => {

    });
  }
}
