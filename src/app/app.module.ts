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
import {AccordionChildComponent} from "../components/accordion/accordion-child.component";

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
    AccordionChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
