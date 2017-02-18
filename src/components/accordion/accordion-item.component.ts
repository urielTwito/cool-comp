import {Component, Input} from '@angular/core';
import {AccordionComponent} from "./accordion.component";

@Component({
  selector: 'cool-accordion-item',
  styleUrls:["accordion-item.component.css"],
  templateUrl:"accordion-item.component.html",
  host: {
    'class': 'accordion'
  }
})
export class AccordionItemComponent {


  @Input('title')
  title: string;

  private _isOpen: boolean;
  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }

  get isOpen() {
    return this._isOpen;
  }

  constructor(private accordion: AccordionComponent) {
    this.isOpen = false;
    this.accordion.addItem(this);
  }

  ngOnDestroy() {
    this.accordion.removeIem(this);
  }

  toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
