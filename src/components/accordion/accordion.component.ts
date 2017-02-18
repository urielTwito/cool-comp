import {Component} from "@angular/core";
import {AccordionItemComponent} from "./accordion-item.component";

@Component({
  selector: 'cool-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.css']
})
export class AccordionComponent {
  items: Array<AccordionItemComponent> = [];

  addItem(item: AccordionItemComponent): void {
    this.items.push(item);
  }

  closeOthers(openItem: AccordionItemComponent): void {
    this.items.forEach((item: AccordionItemComponent) => {
      if (item !== openItem) {
        item.isOpen = false;
      }
    });
  }

  removeIem(item: AccordionItemComponent): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
