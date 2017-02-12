import {Component, QueryList, ContentChildren, AfterContentInit} from '@angular/core';
import {AccordionChildComponent} from "./accordion-child.component";

@Component({
  selector: 'cool-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.css']
})
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionChildComponent)
  childComponents: QueryList<AccordionChildComponent>;

  ngAfterContentInit() {
    let activeChildComponent = this.childComponents.filter((child) => child.active);
    if (activeChildComponent.length === 0) {
      this.selectTab(this.childComponents.first);
    }
  }

  selectTab(childComponent: AccordionChildComponent) {
    this.childComponents.toArray().forEach(child => child.active = false);
    childComponent.active = true;
  }
}
