import {Component, Input} from '@angular/core';

@Component({
  selector: 'cool-accordion-child',
  styles: [`
    .pane{
      padding: 1em;
    }
  `],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class AccordionChildComponent {
  @Input('title') title: string;
  @Input() active = false;
}
