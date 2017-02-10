import {Component, OnInit, Input, Renderer, ElementRef} from '@angular/core';

@Component({
  selector: 'cool-round-menu',
  templateUrl: './round-menu.component.html',
  styleUrls: ['./round-menu.component.css']
})
export class RoundMenuComponent {

  MAX_ITEMS: number = 6;
  _actions: ApplicationAction<any>[];
  currentActionPos: number = 0;


  @Input()
  set actions(actions: ApplicationAction<any>[]) {
    this._actions = actions;
  }

  constructor(private elementref: ElementRef, private renderer: Renderer) {
    this.currentActionPos = 0;
  }

  public nextItems() {
    if (this.currentActionPos + this.MAX_ITEMS >= this.actions.length) {
      this.currentActionPos = 0;
    }
    else {
      this.currentActionPos = (this.currentActionPos + this.MAX_ITEMS);
    }
  }

  get partialActions(): ApplicationAction<any>[] {
    return this.actions.slice(this.currentActionPos, this.currentActionPos + this.MAX_ITEMS);
  }

  get actions(): ApplicationAction<any>[] {
    return this._actions;
  }

  private execute(action) {
    action.execute();
  }

}


export class ApplicationAction<T> {
  public subActions: Array<ApplicationAction<T>>;
  public canExecute: (T) => boolean;

  constructor(public actionParameter: T,
              public title: string,
              public tooltip: string,
              public action: (T) => void,
              public icon?: string) {
    this.subActions = new Array<ApplicationAction<T>>();
    this.canExecute = (T) => {
      return true;
    }
  }

  execute() {
    this.action(this.actionParameter);
  }

  executeWitParameter(parameter: any) {
    this.action(parameter);
  }

}
