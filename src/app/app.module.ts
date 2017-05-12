import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoundMenuComponent } from '../components/round-menu/round-menu.component';
import { RoundMenuDemoComponent } from './app/demo/round-menu-demo/round-menu-demo.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routing";
import {DescriptionComponent} from "./app/description.component";
import { ToggleButtonComponent } from '../components/toggle-button/toggle-button.component';
import { ToggleButtonDemoComponent } from './app/demo/toggle-button-demo/toggle-button-demo.component';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { AccordionDemoComponent } from './app/demo/accoridion-demo/accordion-demo.component';
import {AccordionItemComponent} from "../components/accordion/accordion-item.component";

import {AngularFireModule, FIREBASE_PROVIDERS} from 'angularfire2';
import {ItemListComponent} from "./app/firebase/item-list.component";

export const firebaseConfig = {
  apiKey: "AIzaSyCmMeJz0YIwTPbadsiGie1oc-H_iX8XJKY",
  authDomain: "my-first-project-41b30.firebaseapp.com",
  databaseURL: "https://my-first-project-41b30.firebaseio.com",
  projectId: "my-first-project-41b30",
  storageBucket: "my-first-project-41b30.appspot.com",
  messagingSenderId: "561846147455"
};
@NgModule({
  declarations: [
    AppComponent,
    RoundMenuComponent,
    RoundMenuComponent,
    RoundMenuDemoComponent,
    DescriptionComponent,
    ToggleButtonComponent,
    ToggleButtonDemoComponent,
    AccordionComponent,
    AccordionDemoComponent,
    AccordionItemComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FIREBASE_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
