import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoundMenuComponent } from '../components/round-menu/round-menu.component';
import { RoundMenuDemoComponent } from './app/demo/round-menu-demo/round-menu-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    RoundMenuComponent,
    RoundMenuComponent,
    RoundMenuDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
