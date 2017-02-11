import {Routes} from "@angular/router";
import {RoundMenuDemoComponent} from "./app/demo/round-menu-demo/round-menu-demo.component";
import {DescriptionComponent} from "./app/description.component";
import {ToggleButtonDemoComponent} from "./app/demo/toggle-button-demo/toggle-button-demo.component";
export const APP_ROUTES: Routes = [
  {
    path: '', component: DescriptionComponent,
  },
  {path: "round-menu", component: RoundMenuDemoComponent},
  {path: "toggle-button", component: ToggleButtonDemoComponent}
];
