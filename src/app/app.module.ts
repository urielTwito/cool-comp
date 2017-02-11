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

@NgModule({
  declarations: [
    AppComponent,
    RoundMenuComponent,
    RoundMenuComponent,
    RoundMenuDemoComponent,
    DescriptionComponent,
    ToggleButtonComponent,
    ToggleButtonDemoComponent
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
